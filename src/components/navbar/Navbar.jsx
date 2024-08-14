import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <img
          src="src\assets\images\logo.jpg"
          alt="market house, logo"
          className="logo"
        />
        <p className={styles.cm}>Market House</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.listitem}>
          <Link to="/">Home</Link>
          <div className={styles.bm}></div>
        </li>
        <li className={styles.listitem}>
          <Link to="catalog">Catalog</Link>
          <div className={styles.bm}></div>
        </li>
        <li className={styles.listitem}>
          <Link to="cart">Cart</Link>
          <div className={styles.bm}></div>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
