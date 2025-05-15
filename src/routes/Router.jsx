import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffes"),
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: CoffeeDetails,
      },
    ],
  },
]);

export default router;
