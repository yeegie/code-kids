import styles from "./header.module.scss";
import { Button } from "@shared/ui/button";

export interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  return <header
    className={styles.header}
  >
    <div className={styles.header__logo}>
      <a href="/">
        <span className={styles.header__underscope}>_</span>
        CodeKids
      </a>
    </div>
    <div className={styles.header__navholder}>
      <nav>
        <Button text="О нас" variant="text" />
        <Button text="Курсы" variant="text" />
        <Button text="Отзывы" variant="text" />
      </nav>
    </div>
  </header>
};

