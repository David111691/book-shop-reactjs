import styles from "./CatalogSection.module.css";

function CatalogSection() {
  return (
    <div className={styles.catalog}>
      <button className={styles["catalog__button"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={styles["catalog__button-icon"]}
        >
          <path d="M4 3.999a2 2 0 0 1 2-2v20a2 2 0 0 1-2-2v-16Zm4 18v-20h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8Zm5-10a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1.5-5a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3h-5Z"></path>
        </svg>
        <span>Каталог</span>
      </button>
      <div className={styles["catalog__search-wrapper"]}>
        <input className={styles["catalog__search-input"]}></input>
        <button className={styles["catalog__search-button"]}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M3 9.999a7 7 0 0 0 10.33 6.158l4.256 4.256a2 2 0 1 0 2.828-2.828l-4.255-4.256A7 7 0 1 0 3 9.999Zm12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CatalogSection;
