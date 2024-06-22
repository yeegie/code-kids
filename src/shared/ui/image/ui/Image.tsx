import styles from "./Image.module.scss";
import clsx from "clsx";

export interface ImageProps {
  image: string;
  width?: number;
  height?: number;
  rounded?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  image,
  width,
  height,
  rounded,
}) => {
  const imageWidth = width ? { width: width } : {};
  const imageHeight = height ? { height: height } : {};
  const imageRounded = rounded ? { borderRadius: "15px" } : {};

  return (
    <img
      className={clsx(styles.image)}
      src={image}
      style={{
        ...imageWidth,
        ...imageHeight,
        ...imageRounded,
      }}
    />
  );
};
