import styles from "./home.module.scss";
import { Main } from "@widgets/main";

import { CourseCard } from "@widgets/course-card";
import { Title } from "@shared/ui/title";
import { TeacherCard } from "@/widgets/teacher-card";

export const HomePage = () => {
  const course_data = [
    { title: "Веб-приложения", mounths: 3, color: "#F6FFBE" },
    { title: "Моды для Minecraft", mounths: 1, color: "#BEE0FF" },
  ];
  const teacher_data = [
    {
      image: "",
      name: "Игорь Смирнов",
      bio: "Биография",
      skills: "Python",
      reviews: 27,
    },
  ];

  return (
    <main className={styles.home}>
      <Main />

      <Title fontSize="25pt">{`Курсы (${course_data.length})`}</Title>
      {course_data.map((card, index) => (
        <CourseCard
          key={index}
          title={card.title}
          mounths={card.mounths}
          color={card.color}
        />
      ))}

      <Title fontSize="25pt">Наши преподаватели</Title>
      {teacher_data.map((teacher, index) => (
        <TeacherCard
          key={index}
          image={teacher.image}
          name={teacher.name}
          bio={teacher.bio}
          skills={teacher.skills}
          reviews={teacher.reviews}
        />
      ))}
    </main>
  );
};
