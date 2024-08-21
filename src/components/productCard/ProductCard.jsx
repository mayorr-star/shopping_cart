import { useOutletContext } from "react-router-dom";
import { CardButton } from "../button/Button";
import { MinusSquare, PlusSquare, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { selectedIds, setSelectedIds, cartItems, setCartItems } =
    useOutletContext();

  const handleInputChange = (e) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: e.target.value };
        } else {
          return cartItem;
        }
      })
    );
  };

  const handleIncButtonClick = () => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      })
    );
  };

  const handleDecButtonClick = () => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  const handleRemove = () => {
    setSelectedIds(selectedIds.filter((id) => product.id !== id));
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
  };

  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <div className={styles.flex}>
          <img src={product.image} alt={product.title} />
          <div>
            <p className="product_name">{product.title}</p>
            <p className="product_price">{`Price: ${product.price} GHC`}</p>
            <p className="quantity">{`Quantity: ${product.quantity}`}</p>
            <p className="total_cost">{`Cost: ${product.price} GHC x ${
              product.quantity
            } = ${Number(product.price) * product.quantity}`}</p>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <CardButton
          onClick={handleDecButtonClick}
          ariaLabel="Decrease number of items"
        >
          <MinusSquare />
        </CardButton>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={product.quantity}
          onChange={handleInputChange}
          min={1}
        />
        <CardButton
          onClick={handleIncButtonClick}
          ariaLabel="Increase number of items"
        >
          <PlusSquare />
        </CardButton>
      </div>
      <CardButton
        ariaLabel="Remove from cart"
        onClick={handleRemove}
        cls={styles.remBtn}
      >
        <Trash2 />
      </CardButton>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
