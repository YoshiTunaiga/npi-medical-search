import Home from "./components/Home/Home";
import { useRoutes } from "react-router-dom";
import NPPage from "./components/NPPage/NPPage";

function App() {
  const routes = useRoutes([
    { path: "/npi-medical-search", element: <Home /> },
    { path: "/api/:npId", element: <NPPage /> },
  ]);

  return routes;
}

export default App;
