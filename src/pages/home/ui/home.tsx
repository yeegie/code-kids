import styles from "./home.module.scss";
import { Main } from "@widgets/main";

import { CourseCard } from "@widgets/course-card";
import { Title } from "@shared/ui/title";

export const HomePage = () => {
  const data = [
    { title: "Веб-приложения", mounths: 3, color: "#F6FFBE" },
    { title: "Моды для Minecraft", mounths: 1, color: "#BEE0FF" },
  ];

  return (
    <main className={styles.home}>
      <Main />

      <Title fontSize="25pt">{`Курсы (${data.length})`}</Title>
      {data.map((card, index) => (
        <CourseCard
          key={index}
          title={card.title}
          mounths={card.mounths}
          color={card.color}
        />
      ))}
    </main>
  );
};
