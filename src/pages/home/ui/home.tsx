import styles from "./home.module.scss";

import { Welcome } from "@/widgets/welcome";
import { CourseList } from "@widgets/course-list";
import { TeacherList } from "@/widgets/teacher-list/ui/teacherList";
import { WorkList } from "@/widgets/work-list";
import { FeedbackBlock } from "@widgets/feedback-block";

import { course_data, teacher_data, image_data, filter_data } from "@shared/consts";

import { useFilter } from "@features/hooks/useFilter";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <Welcome />
      <CourseList courses={course_data} />
      <TeacherList teachers={teacher_data} />
      <WorkList works={image_data} />
      <FeedbackBlock />
    </div>
  );
};
