import styles from "./InfoTag.module.scss";

export interface InfoTagProps { }

export const InfoTag: React.FC<InfoTagProps> = () => {
  return <div className={styles.tag}>★ Популярно</div>;
};
