import axiosInstance from "./axiosInstance.js";

export async function getAllOrders() {
  const response = await axiosInstance.get("/orders/all");
  return response.data;
}

export async function updateOrderStatus(orderId, status) {
  const response = await axiosInstance.patch(`/orders/${orderId}/status`, {
    status,
  });
  return response.data;
}

export async function uploadCompletedFile(orderId, file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axiosInstance.post(
    `/orders/${orderId}/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return response.data;
}
