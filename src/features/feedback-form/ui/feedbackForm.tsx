import styles from "./feedbackForm.module.scss";

import { Title } from "@shared/ui/title";
import { Paragraph } from "@shared/ui/paragraph";
import { Button } from "@/shared/ui/button";

import { toast } from "react-hot-toast";

import React, { useState } from "react";

export const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");

  const feedbackNotify = () => toast.success(`${name}, мы вам перезвоним!`, {
    position: "bottom-right",
    icon: "📱",
  });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    feedbackNotify();
  }

  const inputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return(
    <form action="#" className={styles.feedback} onSubmit={handleSubmit}>
      <div className={styles.feedback__text}>
        <Title>Мы вам позвоним</Title>
        <Paragraph>Если вы хотите больше узнать о нас или не знаете, какую программу выбрать, оставьте нам ваш номер — и мы перезвоним.</Paragraph>
      </div>
      <div className={styles.feedback__inputs}>
        <div className={styles.feedback__input_list}>
          <input type="text" placeholder="Как к вам обращаться?" onChange={inputHandleChange} required/>
          <div>
            <input type="tel" placeholder="Телефон" required />  {/* pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" */}
            <input type="email" placeholder="Электронная почта" required /> {/* pattern=".+@example\.com" */}
          </div>
          <Button type="submit" text="Отправить" variant="fill" />
        </div>
        <Paragraph>Нажимая на кнопку, я соглашаюсь на обработку <a href="#" className={styles.feedback__link}>персональных данных</a> и с <a href="#" className={styles.feedback__link}>правилами пользования Платформой</a>.</Paragraph>
      </div>
    </form>
  );
};
