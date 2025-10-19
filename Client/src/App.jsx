import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Login_Register_Page/Register";
import Login from "./pages/Login_Register_Page/Login";
import DirectoryView from "./pages/DirectoryViewPage/DirectoryView";

import "./App.css";
import Layout from "./Layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all internal pages
    children: [
      {
        index: true, // default route (/)
        element: <DirectoryView />,
      },
      {
        path: "directory/:dirId",
        element: <DirectoryView />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
