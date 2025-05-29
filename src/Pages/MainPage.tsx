import styles from "./MainPage.module.css";

import Slider from "../Components/MainPage/Slider";
import TopMenu from "../Components/MainPage/TopMenu";
import ProductShelf from "../Components/MainPage/ProductShelf";

function MainPage() {
  return (
    <div>
      <div className={styles.container}>
        <Slider />
        <TopMenu />
      </div>
      <div className={styles.productShelf_container}>
        <ProductShelf />
      </div>
    </div>
  );
}

export default MainPage;
