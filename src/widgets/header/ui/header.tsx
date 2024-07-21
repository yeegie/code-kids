import styles from "./header.module.scss";
import clsx from "clsx";

import { PAGES } from "@/shared/consts";
import { Link } from "react-router-dom";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const currentUrl = window.location.pathname;

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__container)}>
        <div className={styles.header__logo}>
          {currentUrl != "/"
          ? <Link to={PAGES.HOME}><img src="src/assets/logo.svg" alt="_CodeKids" /></Link>
          : <img src="src/assets/logo.svg" alt="_CodeKids" />}
        </div>
        <div className={styles.header__button_container}>
          <ul>
            <ol><a href="#" className={styles.header__button_item}>О нас</a></ol>
            <ol><a href="#" className={styles.header__button_item}>Курсы</a></ol>
            <ol><a href="#" className={styles.header__button_item}>Учителя</a></ol>
            <ol><a href="#" className={styles.header__button_item}>Работы учеников</a></ol>
          </ul>
        </div>
      </div>
    </header>
  );
};
