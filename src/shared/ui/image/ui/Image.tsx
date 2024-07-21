import styles from "./Image.module.scss";
import clsx from "clsx";

export interface ImageProps {
  image: string;
  width?: number;
  height?: number;
  gridColumn?: string;
  rounded?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  image,
  width,
  height,
  gridColumn,
  rounded,
}) => {
  const imageRounded = rounded ? { borderRadius: "15px" } : {};
  const imageGridColumn = gridColumn? { gridColumn: gridColumn } : {};

  return (
    <img
      className={clsx(styles.image)}
      src={image}
      height={height}
      width={width}
      style={{
        ...imageRounded,
        ...imageGridColumn,
      }}
    />
  );
};
