import { Title } from "@/shared/ui/title";
import styles from "./courseList.module.scss";
import { CourseCard, ICourse } from "@entities/course";

export interface CourseListProps {
  courses?: ICourse[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const coursesList = courses
    ? courses.map((course, index) => (
      <CourseCard
        key={index}
        info={course.info}
        title={course.title}
        mounths={course.mounths}
        color={course.color}
      />
    ))
    : null;

  return (
    <div className={styles.section}>
      <Title fontSize="25pt">📚 {`Курсы (${courses?.length})`}</Title>
      <div className={styles.container}>{coursesList ? coursesList : null}</div>
    </div>
  );
};
