import axiosInstance from "./axiosInstance.js";

export async function generateSummary(data) {
  const response = await axiosInstance.post("/ai/summary", data);
  return response.data;
}

export async function suggestSkills(data) {
  const response = await axiosInstance.post("/ai/skills", data);
  return response.data;
}

export async function improveExperience(data) {
  const response = await axiosInstance.post("/ai/experience", data);
  return response.data;
}

export async function generateCoverLetter(data) {
  const response = await axiosInstance.post("/ai/cover-letter", data);
  return response.data;
}
