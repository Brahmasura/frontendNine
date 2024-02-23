import style from "./navbar.module.scss";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <img src={logo} alt="site logo" />
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
