import Container from "@/components/container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Header />

      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </div>
  );
};

export default MainLayout;
