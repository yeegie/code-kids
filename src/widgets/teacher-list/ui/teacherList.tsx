import styles from "./teacherList.module.scss";
import { ITeacher, TeacherCard } from "@entities/teacher";
import { Title } from "@shared/ui/title";

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
    <div className={styles.section}>
      <Title fontSize="25pt">👨🏻‍🏫 Наши преподаватели</Title>
      <div className={styles.container}>
        {teachersList ? teachersList : null}
      </div>
    </div>
  );
};
