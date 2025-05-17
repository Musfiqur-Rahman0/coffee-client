import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://coffee-server-kappa-three.vercel.app/coffes"),
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/update-coffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-kappa-three.vercel.app/coffee/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-kappa-three.vercel.app/coffee/${params.id}`
          ),
        Component: CoffeeDetails,
      },
    ],
  },
]);

export default router;
