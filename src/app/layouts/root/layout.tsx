import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet } from "react-router-dom";

// import styles from "./layout.scss";

import { Header } from "@widgets/header";
import { Promo } from "@widgets/promo";

export const Layout = () => {
  return (
    <>
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
        <Promo />
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </SkeletonTheme>
    </>
  );
};
