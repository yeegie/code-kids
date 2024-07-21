import styles from "./courseFilter.module.scss";

import { CourseFilterButton } from "@shared/ui/course-filter-button";

import { useFilter } from "@features/hooks/useFilter";

import { filter_data } from "@shared/consts/data";

export interface CourseFilterProps {

}

export const CourseFilter: React.FC = () => {
  const { filter, set } = useFilter();
  set(filter_data);

  return (
    <div className={styles.filter}>
      {filter.map((filter, index) => (
        <CourseFilterButton
          key={index}
          filterId={filter.id}
          title={filter.title}
          isActive={filter.isActive}
        />
      ))}
    </div>
  );
};