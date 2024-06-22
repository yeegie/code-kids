import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export interface DropdownProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.info(isOpen);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown__button} onClick={() => toggle()}>
        {children} <KeyboardArrowDownRoundedIcon />
      </button>
      <div
        className={styles.dropdown__content}
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <Link to="">Преподаватели</Link>
        <Link to="">Сертификаты</Link>
        <Link to="">Работа у нас</Link>
        <Link to="">Родителям</Link>
      </div>
    </div>
  );
};
