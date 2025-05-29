import { Link } from "react-router-dom";

import styles from "./ProductShelf.module.css";

function ProductShelf() {
  return (
    <div className={styles.container}>
      <h2 className={styles.secondary_header}>НОВИНКИ ЛИТЕРАТУРЫ</h2>
      <Link to="#" className={styles.linkItem}>
        <span>Смотреть все</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M6 11a1 1 0 1 0 0 2h9.586l-3.093 3.093a1 1 0 0 0 1.414 1.414l4.794-4.794a1.002 1.002 0 0 0 .231-1.076.999.999 0 0 0-.225-.344l-4.8-4.8a1 1 0 1 0-1.414 1.414L15.586 11H6Z"></path>
        </svg>
      </Link>
    </div>
  );
}

export default ProductShelf;
