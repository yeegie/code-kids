import styles from "./welcome.module.scss";
import clsx from "clsx";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";
import { CourseFilter } from "@features/course-filter";

export const Welcome: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className={clsx("container", styles.welcome__container)}>
        <div>
          <Title>Программирование для детей</Title>
          <Paragraph>Развитие в ребёнке креативности и нестандартного мышления</Paragraph>
        </div>
        <div className={styles.welcome__filter_container}>
          <CourseFilter />
        </div>
      </div>
    </section>
  );
};
