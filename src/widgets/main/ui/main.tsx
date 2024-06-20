import styles from "./main.module.scss";
import clsx from "clsx";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";

import { CourseCard } from "@shared/ui/course-card";

export const Main: React.FC = () => {
  return <div className={clsx(styles.main)}>
    <div>
      <Title size={2}>Программирование для детей</Title>
      <Paragraph>Развитие в ребёнке креативности и поиске не стандартных решений</Paragraph>
    </div>
    <div>

    </div>
  </div>
};

