import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="src\assets\images\logo.jpg"
          alt="market house, logo"
          className="logo"
        />
        <p className="cm">Market House</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <div className="bm"></div>
        </li>
        <li>
          <Link to="catalog">Catalog</Link>
          <div className="bm"></div>
        </li>
        <li>
          <Link to="cart">Cart</Link>
          <div className="bm"></div>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
