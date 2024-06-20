import styles from "./promo.module.scss";
import clsx from "clsx";

import { Button } from "@shared/ui/button";

export const Promo: React.FC = () => {

  return <div className={clsx(styles.promo)}>
    Запишитесь на 3 бесплатных урока
    <Button text="Записаться" variant="text" />
  </div>
};
