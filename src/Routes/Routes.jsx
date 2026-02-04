import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products", // ✅ new route
        element: <AllProducts />,
      },
      // {
      //   path: "/product-details",
      //   element: <ProductDetails />,
      // },
      {
        path: "/products/:sku",
        element: <ProductDetails />,
      },
    ],
  },
]);
