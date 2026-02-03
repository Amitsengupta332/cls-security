import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {  RouterProvider } from "react-router-dom";
 
import { router } from "./Routes/Routes.jsx";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   // { path: "/products", element: <AllProductsPage /> },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      {/* <App /> */}
        <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
