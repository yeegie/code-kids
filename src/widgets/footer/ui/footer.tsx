import styles from "./footer.module.scss";
import clsx from "clsx";

import { Paragraph } from "@shared/ui/paragraph";
import { Title } from "@shared/ui/title";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.footer__container)}>
        <div className={styles.footer__content}>
          <div className={styles.footer__contacts}>
            <Title size={2}>По всем вопросам</Title>
            <Paragraph>+7 (999)-99-99</Paragraph>
          </div>
          <div className={styles.footer__address}>
            <Title size={2}>Адрес</Title>
            <Paragraph>Улица Пушкина, дом 10, квартира 25, город Екатеринбург, Свердловская область, 620075, Россия</Paragraph>
          </div>
        </div>
        <span>© CodeKids, 2024</span>
      </div>
    </footer>
  );
};
