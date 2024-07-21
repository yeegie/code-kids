import styles from "./courseList.module.scss";

import { CourseCard, ICourse } from "@entities/course";
import clsx from "clsx";

import { Title } from "@/shared/ui/title";
import { Paragraph } from "@/shared/ui/paragraph";

import { useFilter } from "@features/hooks/useFilter";

export interface CourseListProps {
  courses?: ICourse[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const { filterList } = useFilter();
  const coursesList = courses
    ? courses.map((course, index) => (
      <CourseCard
        key={index}
        info={course.info}
        title={course.title}
        mounths={course.mounths}
        color={course.color}
        image={course.image}
      />
    ))
    : null;

  const coursesLength = coursesList
    ? coursesList.length > 0 ? `(${coursesList.length})` : null
    : null;

  return (
    <section className={styles.courses}>
      <div className="container">
        <Title>{`📚 Курсы ${coursesLength}`}</Title>
        <div className={clsx("grid", styles.courses__list)}>
          {coursesList
          ? coursesList
          : <Paragraph>Тут пусто 😔</Paragraph>}
        </div>
      </div>
    </section>
  );
};
