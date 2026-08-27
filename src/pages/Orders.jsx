import { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx";
import ErrorState from "../components/ErrorState.jsx";
import { getMyOrders } from "../api/orderApi.js";
import "./Orders.css";

const API_BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace("/api", "")
  : "http://localhost:5000";

function statusClass(status) {
  if (status === "Completed") return "status-completed";
  if (status === "In Progress") return "status-progress";
  return "status-pending";
}

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const result = await getMyOrders();
      setOrders(result.orders);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await getMyOrders();
        setOrders(result.orders);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      <p className="orders-subtitle">Track and manage your CV service orders</p>

      <div className="orders-table-wrapper card">
        {isLoading ? (
          <div className="orders-loading">
            <Spinner size="lg" />
          </div>
        ) : hasError ? (
          <ErrorState
            message="We couldn't load your orders. Please try again."
            onRetry={loadOrders}
          />
        ) : orders.length === 0 ? (
          <p className="orders-empty">You haven't placed any orders yet.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const fileUrl = API_BASE_URL + order.completedFileUrl;

                const shortId = order._id.slice(-6).toUpperCase();

                return (
                  <tr key={order._id}>
                    <td>{shortId}</td>

                    <td>{order.service}</td>

                    <td>{formatDate(order.createdAt)}</td>

                    <td>
                      <span
                        className={`status-badge ${statusClass(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td>${order.price}</td>

                    <td>
                      {order.status === "Completed" &&
                      order.completedFileUrl ? (
                        <a
                          href={fileUrl}
                          className="orders-download-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-download"></i> Download
                        </a>
                      ) : (
                        <span className="orders-waiting">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Orders;
