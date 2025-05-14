import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
    ],
  },
]);

export default router;
