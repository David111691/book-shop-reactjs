import { useState } from "react";
import styles from "./MenuOptions.module.css";
import LoginMenu from "../Login_menu/LoginMenu";

function MenuOptions() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  function closeLogin() {
    setIsLoginOpen(false);
  }

  return (
    <div className={styles["menu-options"]}>
      <button
        className={styles["menu-options__button"]}
        onClick={() => setIsLoginOpen(true)}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M16 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM4.636 26.006c.5-3.533 2.384-6.484 5.909-8.006l4.412 2.696a2 2 0 0 0 2.086 0L21.455 18c3.525 1.522 5.41 4.473 5.909 8.006C27.518 27.1 26.604 28 25.5 28h-19c-1.105 0-2.018-.9-1.864-1.994Z"></path>
          </svg>
        </span>
        <span>Войти</span>
      </button>
      <button className={styles["menu-options__button"]}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M4.5 6a1 1 0 0 1 1-1h5v12.259a1 1 0 0 0 1.504.864l4-2.334a1 1 0 0 0 .496-.863V5h10a1 1 0 0 1 1 1v19a2 2 0 0 1-2 2h-19a2 2 0 0 1-2-2V6Zm15 15a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4Z"></path>
          </svg>
        </span>
        <span>Заказы</span>
      </button>
      <button className={styles["menu-options__button"]}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M5.5 6.77C5.5 5.24 6.782 4 8.364 4h15.272C25.218 4 26.5 5.24 26.5 6.77v20.307c0 .32-.171.617-.453.785a.983.983 0 0 1-.928.04L16 23.494l-9.119 4.409a.983.983 0 0 1-.928-.04.917.917 0 0 1-.453-.786V6.769Z"></path>
          </svg>
        </span>
        <span>Закладки</span>
      </button>
      <button className={styles["menu-options__button"]}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M2 2.998a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2h22a1 1 0 0 1 .97 1.243L29.17 9H3L2 2.998ZM3.667 13 5 21a1 1 0 0 0 1.053.999l17.523-.923a3 3 0 0 0 2.753-2.268L28.012 13H3.667ZM10 27.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
          </svg>
        </span>
        <span>Корзина</span>
      </button>
      {isLoginOpen && <LoginMenu closeLogin={closeLogin} />}
    </div>
  );
}

export default MenuOptions;
