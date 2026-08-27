import axiosInstance from "./axiosInstance.js";

export async function registerUser(data) {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
}

export async function loginUser(data) {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
}

export async function getMe() {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
}

export async function updateMe(data) {
  const response = await axiosInstance.patch("/auth/me", data);
  return response.data;
}
