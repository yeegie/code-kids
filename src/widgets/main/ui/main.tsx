import styles from "./main.module.scss";
import clsx from "clsx";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";
import { Button } from "@shared/ui/button";

export const Main: React.FC = () => {
  return (
    <div className={clsx(styles.main)}>
      <div className={styles.content}>
        <Title fontSize="25pt">Программирование для детей</Title>
        <Paragraph>
          Развитие в ребёнке креативности и поиске нестандартных решений
        </Paragraph>
        <div>
          <Button text="Python" variant="fill" />
          <Button text="Python" variant="fill" />
          <Button text="Python" variant="fill" />
          <Button text="Python" variant="fill" />
          <Button text="Python" variant="fill" />
          <Button text="Python" variant="fill" />
        </div>
      </div>
    </div>
  );
};
