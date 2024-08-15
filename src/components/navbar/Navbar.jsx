import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types"

const NavBar = ({itemsNum = 0}) => {
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
        <li className={`${styles.listitem} ${styles.relative}`}>
          <Link to="cart">
            <ShoppingCart/>
          </Link>
          <span className={styles.itemsNum}>{itemsNum}</span>
          <div className={styles.bm}></div>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  itemsNum: PropTypes.number
}

export default NavBar;
