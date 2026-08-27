import axiosInstance from "./axiosInstance.js";

export async function createOrder(data) {
  const response = await axiosInstance.post("/orders", data);
  return response.data;
}

export async function getMyOrders() {
  const response = await axiosInstance.get("/orders");
  return response.data;
}

export async function updateOrderDraft(orderId, data) {
  const response = await axiosInstance.patch(`/orders/${orderId}/draft`, data);
  return response.data;
}
