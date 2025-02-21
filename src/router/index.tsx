import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductPage from "../pages/Product";
import CartPage from "../pages/Cart";
import Layout from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);
