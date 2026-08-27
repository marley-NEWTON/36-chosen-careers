import { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx";
import ErrorState from "../components/ErrorState.jsx";
import {
  getAllOrders,
  updateOrderStatus,
  uploadCompletedFile,
} from "../api/adminApi.js";
import "./AdminOrders.css";

const statusOptions = ["Pending", "In Progress", "Completed"];

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [actionError, setActionError] = useState("");
  const [uploadingId, setUploadingId] = useState(null);

  const loadOrders = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const result = await getAllOrders();
      setOrders(result.orders);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    setActionError("");
    try {
      const result = await updateOrderStatus(orderId, newStatus);
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? result.order : o)),
      );
    } catch (error) {
      setActionError("Could not update status. Please try again.");
    }
  };

  const handleFileUpload = async (orderId, file) => {
    if (!file) return;
    setActionError("");
    setUploadingId(orderId);
    try {
      const result = await uploadCompletedFile(orderId, file);
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? result.order : o)),
      );
    } catch (error) {
      const message =
        error.response?.data?.message || "Upload failed. Please try again.";
      setActionError(message);
    } finally {
      setUploadingId(null);
    }
  };

  return (
    <div className="admin-orders-page">
      <h1>All Orders</h1>
      <p className="admin-orders-subtitle">Manage customer CV orders</p>

      {actionError && <p className="api-error">{actionError}</p>}

      <div className="orders-table-wrapper card">
        {isLoading ? (
          <div className="orders-loading">
            <Spinner size="lg" />
          </div>
        ) : hasError ? (
          <ErrorState message="Couldn't load orders." onRetry={loadOrders} />
        ) : orders.length === 0 ? (
          <p className="orders-empty">No orders yet.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Price</th>
                <th>Status</th>
                <th>Upload File</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.user?.fullName || "Unknown"}</td>
                  <td>{order.service}</td>
                  <td>${order.price}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="admin-status-select"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <label className="admin-upload-btn">
                      {uploadingId === order._id
                        ? "Uploading..."
                        : "Choose File"}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        hidden
                        disabled={uploadingId === order._id}
                        onChange={(e) =>
                          handleFileUpload(order._id, e.target.files[0])
                        }
                      />
                    </label>
                    {order.completedFileUrl && (
                      <span className="admin-upload-check">
                        <i className="fa-solid fa-circle-check"></i> Uploaded
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminOrders;
