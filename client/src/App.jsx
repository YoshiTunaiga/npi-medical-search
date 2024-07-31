import { useRoutes } from "react-router-dom";
import Home from "./components/Home/Home";
import NPPage from "./components/NPPage/NPPage";

function App() {
  const routes = useRoutes([
    { path: "/npi-medical-search", element: <Home /> },
    { path: "/api/:id", element: <NPPage /> },
  ]);

  return routes;
}

export default App;
