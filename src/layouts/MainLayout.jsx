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
      <Footer />
    </>
  );
};

export default MainLayout;
