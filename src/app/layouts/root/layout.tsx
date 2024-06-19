import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet } from "react-router-dom";

// import styles from "./layout.scss";

export const Layout = () => {
  return (
    <>
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </SkeletonTheme>
    </>
  );
};
