import Logo from "./Logo";
import CatalogSection from "./CatalogSection";
import TopMenu from "./TopMenu";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header>
      <TopMenu />

      <HeaderMenu>
        <Logo />
        <CatalogSection />
      </HeaderMenu>
    </header>
  );
}

export default Header;
