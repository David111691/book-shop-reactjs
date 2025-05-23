import { Link } from "react-router-dom";

import styles from "./TopMenu.module.css";

function TopMenu() {
  return (
    <div className={styles.top_menu_container}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="#">
            Москва
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="#">
            Магазины
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="#">
            Доставка и оплата
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="#">
            Программа лояльности
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="#">
            Партнерская программа
          </Link>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="#">
            Вакансии
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="#">
            8 (495) 424-84-44
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="#">
            Обратная связь
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopMenu;
