import styles from "./MainPage.module.css";

import Slider from "../Components/MainPage/Slider";
import TopMenu from "../Components/MainPage/TopMenu";


function MainPage() {
  return (
    <div className={styles.container}>
      <Slider />
      <TopMenu />
    </div>
  );
}

export default MainPage;
