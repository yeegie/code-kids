import styles from "./header.module.scss";
import { Button } from "@shared/ui/button";
import { Dropdown } from "@shared/ui/dropdown";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">
          <span className={styles.header__underscope}>_</span>
          CodeKids
        </a>
      </div>
      <div className={styles.header__navholder}>
        <nav>
          <Dropdown>О нас</Dropdown>
          <Button text="Курсы" variant="text" />
          <Button text="Отзывы" variant="text" />
        </nav>
      </div>
    </header>
  );
};
