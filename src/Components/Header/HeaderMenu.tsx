import styles from "./HeaderMenu.module.css";

function HeaderMenu({ children }) {
  return (
    <div className={styles["header__menu-container"]}>
      <div className={styles["header__menu-wrapper"]}>{children}</div>
    </div>
  );
}

export default HeaderMenu;
