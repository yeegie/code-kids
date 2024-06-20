import styles from "./Button.module.scss";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  className?: string;
  variant?: "text" | "fill" | 'outline'
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  className,
  variant,
  text,
}) => {
  return <button
    type={type ?? "button"}
    className={clsx(className ?? styles.button, {
      [styles.text]: variant === "text",
      [styles.fill]: variant === "fill",
      [styles.outline]: variant === "outline",
    })}
  >
    {text}
  </button>
};

