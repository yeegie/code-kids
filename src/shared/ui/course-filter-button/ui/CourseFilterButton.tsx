import styles from "./CourseFilterButton.module.scss";
import { useState } from "react";
import clsx from "clsx";

import { useFilter } from "@features/hooks/useFilter";

export interface CourseFilterButtonProps {
  id?: string;
  filterId: number;
  title: string;
  isActive: boolean;
}

export const CourseFilterButton: React.FC<CourseFilterButtonProps> = ({
  id,
  filterId,
  title,
  isActive,
}) => {
  const [isActiveButton, setIsActiveButton] = useState(isActive);
  const { toggle } = useFilter();
  const handleClick = () => {
    toggle(filterId);
    setIsActiveButton(!isActiveButton);
  }

  return (
    <button
      id={id ?? id}
      onClick={handleClick}
      className={clsx(styles.button_filter, {
        [styles.button_active]: isActiveButton == true,
        [styles.button_inactive]: isActiveButton == false,
      })}
    >
      {title}
    </button>
  );
};
