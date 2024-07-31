import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default async function fetchDoctorInfo(npId) {
  try {
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.get(`${API_BASE_URL}/api/${npId}`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor info:", error);
    throw error;
  }
}
