import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
