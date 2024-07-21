import styles from "./workList.module.scss";
import React from "react";

import { IImage } from "@/shared/consts";

import { Title } from "@/shared/ui/title";
import { Image } from "@/shared/ui/image";
import clsx from "clsx";

export interface WorkListProps {
  works?: IImage[];
}

export const WorkList: React.FC<WorkListProps> = ({ works }) => {
  const worksList = works
    ? works.map((work, index) => (
      <Image
        key={index}
        image={work.image}
        rounded
      />
    ))
    : null;

  return (
    <section className={styles.works}>
      <div className="container">
        <Title>💎 Работы наших учеников</Title>
        <div className={clsx("grid", styles.works__list)}>
          {worksList ? worksList : null}
        </div>
      </div>
    </section>
  );
};
