import axios from "axios";

// const API_BASE_URL = import.meta.env.DEV
//   ? import.meta.env.VITE_LOCAL_API_BASE_URL
//   : import.meta.env.VITE_PROD_API_BASE_URL;

export default async function fetchDoctorInfo(npId) {
  try {
    // const config = {
    //   headers: {
    //     "Cache-Control": "no-cache",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // };

    const response = await axios.get(`/api/${npId}`);
    // const result = await response.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor info:", error);
    return {};
  }
}
