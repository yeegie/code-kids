import styles from "./teaherCard.module.scss";
import clsx from "clsx";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";

export interface TeacherCardProps {
  name: string;
  bio: string;
  skills: string;
  reviews: number;
  image: string;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  bio,
  skills,
  reviews,
  image,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__avatar}><img src={image} alt={`Учитель ${name}`} /></div>
      <div className={styles.card__content}>
        <Title size={2}>{name}</Title>
        <Paragraph>👤 {bio}</Paragraph>
        <Paragraph><b>📚 Направления: </b>{skills}</Paragraph>
        <Paragraph><b>★ {reviews} отзывов</b></Paragraph>
      </div>
    </div>
  );
};
