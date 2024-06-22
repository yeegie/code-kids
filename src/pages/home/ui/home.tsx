import styles from "./home.module.scss";

import { Title } from "@shared/ui/title";
import { Image } from "@shared/ui/image";

import { Main } from "@widgets/main";
import { CourseList } from "@widgets/course-list";
import { TeacherList } from "@/widgets/teacher-list/ui/teacherList";

export const HomePage = () => {
  const course_data = [
    { info: "popular", title: "Веб-приложения", mounths: 3, color: "#F6FFBE" },
    { title: "Моды для Minecraft", mounths: 1, color: "#BEE0FF" },
  ];
  const teacher_data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPtBPtOIj16drcpc4Ht93MyJgtRH89ikp_Q&s",
      name: "Игорь Смирнов",
      bio: "Имеет степень магистра по компьютерным наукам, которую получил в Московском государственном университете. Работал разработчиком в крупных IT-компаниях, после чего решил заняться обучением детей программированию.",
      skills: "Java, C++, мобильная разработка",
      reviews: 95,
    },
  ];
  const image_data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    },
  ];

  return (
    <main className={styles.home}>
      <Main />
      <CourseList courses={course_data} />
      <TeacherList teachers={teacher_data} />

      <Title fontSize="25pt">Работы наших учеников</Title>
      {image_data.map((image, index) => (
        <Image key={index} image={image.image} rounded />
      ))}
    </main>
  );
};
