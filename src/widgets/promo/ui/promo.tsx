import styles from "./promo.module.scss";
import clsx from "clsx";

import { Button } from "@shared/ui/button";
import { Paragraph } from "@/shared/ui/paragraph";

export const Promo: React.FC = () => {
  return (
    <div className={clsx(styles.promo)}>
      <div className={clsx("container", styles.promo__content)}>
        <Paragraph>Запишитесь на <strong>3 бесплатных урока</strong></Paragraph>
        <Button text="Записаться" variant="text" />
      </div>
    </div>
  );
};
