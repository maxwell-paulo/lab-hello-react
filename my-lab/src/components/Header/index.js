import style from "./style.module.css";

import logo from "../../images/ironhack-logo-xs.png";

import menu from "../../images/menu-top-xs.png";

function Header() {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" className={style.logo} />
      <img src={menu} alt="menu" className={style.menu} />
    </div>
  );
}

export default Header;
