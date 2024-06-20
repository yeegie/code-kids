import styles from "./Paragraph.module.scss";

export interface ParagraphProps {
  className?: string;
  fontSize?: string;
  color?: string;
  bold?: boolean;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  fontSize,
  color,
  bold,
  children,
}) => {
  const paragraphFontSize = fontSize ? { fontSize: fontSize } : {};
  const paragraphColor = color ? { color: color } : {};
  const paragraphWeigth = bold ? { fontWeigth: "bold" } : {};

  return <p
    className={className ?? styles.paragraph}
    style={{
      ...paragraphColor,
      ...paragraphFontSize,
      ...paragraphWeigth,
    }}
  >
    {children}
  </p>
};

