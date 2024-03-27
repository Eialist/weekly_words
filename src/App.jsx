import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontpage from "./pages/Frontpage.jsx";
import Homepage from "./pages/Homepage.jsx";
import Infopage from "./pages/Infopage.jsx";
import { Adminpage } from "./pages/Adminpage.jsx";
import { Contactpage } from "./pages/Contactpage.jsx";
import { YearFourPage } from "./pages/YearFourPage.jsx";

const routes = [
  {
    path: "weeklywords",
    element: <Frontpage />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
  {
    path: "/info",
    element: <Infopage />,
  },
  {
    path: "/kontakt",
    element: <Contactpage />,
  },
  {
    path: "/ar4",
    element: <YearFourPage />,
  },
  {
    path: "/admin",
    element: <Adminpage />,
  },
];

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
