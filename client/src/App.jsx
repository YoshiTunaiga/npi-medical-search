import Home from "./components/Home/Home";
import { useRoutes } from "react-router-dom";
import NPPage from "./components/NPPage/NPPage";

// import axios from "axios";

function App() {
  // 1851926703 https://npi-db.org
  // const fetchAPI = async () => {
  //   // const response = await axios.get(`https://npi-db.org/api/${1851926703}`);
  //   const response = await axios.get(`http://localhost:8080/api/${1851926703}`);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/api/:npId", element: <NPPage /> },
  ]);

  return routes;
}

export default App;
