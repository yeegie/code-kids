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
    <div className={clsx(styles.card)}>
      <div>
        <img src={image} />
      </div>
      <div>
        <Title>{name}</Title>
        <Paragraph>{bio}</Paragraph>
        <Paragraph>{skills}</Paragraph>
        <Paragraph>{reviews}</Paragraph>
      </div>
    </div>
  );
};
