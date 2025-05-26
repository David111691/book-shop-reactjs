import TopMenu from "./TopMenu";

import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import CatalogSection from "./CatalogSection";
import MenuOptions from "./MenuOptions";

import HeaderBottomList from "./HeaderBottomList";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <TopMenu />

      <HeaderMenu>
        <Logo />
        <CatalogSection />
        <MenuOptions />
      </HeaderMenu>

      <HeaderBottomList />
    </header>
  );
}

export default Header;
