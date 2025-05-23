import styles from "./CatalogSection.module.css";

function CatalogSection() {
  return (
    <div className={styles.catalog}>
      <button className={styles.catalog__button}>Каталог</button>
      <div>
        <input className={styles["catalog__search-input"]}></input>
        <button className={styles["catalog__search-button"]}>asd</button>
      </div>
    </div>
  );
}

export default CatalogSection;
