import styles from "./Title.module.scss";

export interface TitleProps {
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  fontSize?: string;
  color?: string;
  anchor?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  className,
  size,
  fontSize,
  color,
  anchor,
  children
}) => {
  const TitleTag = `h${size || 1}` as keyof JSX.IntrinsicElements;
  const titleColor = color ? { color: color } : {};
  const titleFontSize = fontSize ? { fontSize: fontSize } : {};

  return <TitleTag
    id={anchor ?? ""}
    className={className ?? styles.title}
    style={{
      ...titleColor,
      ...titleFontSize,
    }}
  >
    {children}
  </TitleTag>
};

