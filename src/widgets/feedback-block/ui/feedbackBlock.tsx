import styles from "./feedbackBlock.module.scss";
import clsx from "clsx";

import { FeedbackForm } from "@features/feedback-form";

export const FeedbackBlock = () => {
  return (
    <section className={styles.feedback}>
      <div className={clsx("container", styles.feedback__form)}>
        <FeedbackForm />
      </div>
    </section>
  )
};
