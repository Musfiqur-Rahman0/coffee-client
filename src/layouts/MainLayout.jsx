import Header from "../component/Header";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <footer className="relative   mt-[120px]  h-fit ">
        <div className="absolute inset-0 -z-4 h-full w-full">
          <img
            src="/src/assets/cups/Rectangle 18.png"
            alt=""
            className="w-full  h-full"
          />
        </div>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
