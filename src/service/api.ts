import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});

/* Get all available roles */
export const getRoles = () => API.get("/resume/roles");

/* Analyze resume (text or file) */
export const analyzeResume = (formData: FormData) =>
  API.post("/resume/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

/* Get details for a specific role */
export const getRoleDetails = (role: string) =>
  API.get(`/resume/role/${role}`);