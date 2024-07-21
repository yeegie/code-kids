import styles from "./CourseCard.module.scss";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";
import { InfoTag } from "@shared/ui/info-tag";

export interface CourseCardProps {
  info?: "popular";
  color?: string;
  title: string;
  mounths: number;
  image?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  info,
  color,
  title,
  mounths,
  image,
}) => {
  const cardColor = color ? { backgroundColor: color } : {};
  const mounthsText =
    mounths == 1
      ? `${mounths} месяц`
      : mounths >= 2 && mounths <= 3
        ? `${mounths} месяца`
        : mounths >= 5 && mounths <= 12
          ? `${mounths} месяцев`
          : "Больше года";

  return (
    <article className={styles.card} style={{...cardColor}}>
      <div className={styles.card__info}>{info === "popular" ? <InfoTag /> : null}</div>
      <div className={styles.card__body}>
        <div>
          <Title size={2}>{title}</Title>
          <Paragraph>{mounthsText}</Paragraph>
        </div>
        <img src={image} alt={`${title} preview`} width={100} height={100} />
      </div>
    </article>
  );
};

