import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default async function fetchDoctorInfo(npId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/${npId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor info:", error);
    throw error;
  }
}

// import axios from "axios";

// // const API_BASE_URL = "https://npi-db.org"; //backend API URL

// export default async function fetchDoctorInfo(npId) {
//   try {
//     /* */
//     // const instance = axios.create({ baseURL: "https://npi-db.org" });
//     const config = {
//       mode: "no-cors",
//       headers: {
//         "Cache-Control": "no-cache",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       withCredentials: true,
//       credentials: "same-origin",
//     };
//     const response = await axios.get(`/api/${npId}`, config);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching doctor info:", error);
//     throw error;
//   }
// }
