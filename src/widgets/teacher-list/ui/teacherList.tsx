import styles from "./teacherList.module.scss";
import { ITeacher, TeacherCard } from "@entities/teacher";
import { Title } from "@shared/ui/title";
import clsx from "clsx";

export interface TeacherListProps {
  teachers?: ITeacher[];
}

export const TeacherList: React.FC<TeacherListProps> = ({ teachers }) => {
  const teachersList = teachers
    ? teachers.map((teacher, index) => (
        <TeacherCard
          key={index}
          image={teacher.image}
          name={teacher.name}
          bio={teacher.bio}
          skills={teacher.skills}
          reviews={teacher.reviews}
        />
      ))
    : null;

  return (
    <section className={styles.teachers}>
      <div className="container">
        <Title>👨🏻‍🏫 Наши преподаватели</Title>
        <div className={clsx("grid", styles.teachers__list)}>
          {teachersList ? teachersList : null}
        </div>
      </div>
    </section>
  );
};
