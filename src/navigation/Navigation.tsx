import "./Navigation.css";
import Language from "../language/Language";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import MenuLink from "../menu-link/MenuLink";
import SearchBar from "../search-bar/SearchBar";
import SignIn from "../sign-in/Signin";

export default function Navigation() {
  return (
    <div className="navigation">
      <Logo />
      <Menu>
        <MenuLink title="Buy" />
        <MenuLink title="Rent" />
        <MenuLink title="Sell" />
        <MenuLink title="Rent Out" />
      </Menu>
      <SearchBar />
      <SignIn />
      <Language />
    </div>
  );
}
