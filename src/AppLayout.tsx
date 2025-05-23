import Header from "./Components/Header/Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default AppLayout;
