import { Link } from "react-router-dom";

import styles from "./HeaderBottomList.module.css";

function HeaderBottomList() {
  return (
    <nav className={styles["bottom-list__container"]}>
      <ul className={styles["bottom-list__list"]}>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">Акции</Link>
        </li>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">Распродажа</Link>
        </li>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">КОМИКСЫ И МАНГА</Link>
        </li>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">Настольная игра</Link>
        </li>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">Что ещё почитать?</Link>
        </li>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">Читай-журнал</Link>
        </li>
        <li className={styles["bottom-list__link-item"]}>
          <Link to="#">Подарочные сертификаты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderBottomList;
