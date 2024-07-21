import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet } from "react-router-dom";

// import "./layout.scss";

import { Promo } from "@widgets/promo";
import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <div className="page__body">
      <div><Toaster /></div>
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
        <Promo />
        <Header />
        <Outlet />
        <Footer />
      </SkeletonTheme>
    </div>
  );
};
