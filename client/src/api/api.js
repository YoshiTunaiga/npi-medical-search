import axios from "axios";

// const API_BASE_URL = "https://npi-db.org"; //backend API URL

export default async function fetchDoctorInfo(npId) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`/api/${npId}`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor info:", error);
    throw error;
  }
}
