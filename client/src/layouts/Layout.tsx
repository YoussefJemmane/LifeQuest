import Footer from "./Footer";
import Navbar from "./Navbar";
import type { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
