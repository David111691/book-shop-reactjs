import Header from "./Components/Header/Header";
import styles from "./AppLayout.module.css";
import MainPage from "./Pages/MainPage";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <MainPage />
    </div>
  );
}

export default AppLayout;
