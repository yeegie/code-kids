import styles from "./CourseCard.module.scss";
import clsx from "clsx";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";

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
  const mounthsText = mounths == 1 ? `${mounths} месяц` :
    mounths >= 2 && mounths <= 3 ? `${mounths} месяца` :
      mounths >= 5 && mounths <= 12 ? `${mounths} месяцев` : "Больше года";

  return <div
    className={clsx(styles.card)}
    style={{
      ...cardColor,
    }}
  >
    <div>
      {info}
      <Title fontSize="18pt">{title}</Title>
      <Paragraph fontSize="14pt">{mounthsText}</Paragraph>
    </div>
    <div>
      <img src={image} />
    </div>
  </div>
};

