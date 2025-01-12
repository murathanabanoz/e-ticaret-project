import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import { useState } from "react";

function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="layout">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default Layout;
