import { useState } from "react";
import { PlusSquare, MinusSquare } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Button, { CardButton } from "../button/Button";
import PropTypes from "prop-types";

const Card = ({ product }) => {
  const [value, setValue] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { selectedIds, setSelectedIds, cartItems, setCartItems } =
    useOutletContext();

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setQuantity(Number(e.target.value));
  };

  const handleIncButtonClick = () => {
    setValue((value) => value + 1);
    setQuantity(quantity => quantity + 1);
  };

  const handleDecButtonClick = () => {
    setValue((value) => (value > 1 ? value - 1 : 1));
    setQuantity(quantity => quantity > 1 ? quantity - 1 : 1);
  };

  const handleAddToCartBtnClick = () => {
    addToCart(product, quantity)
    setValue(1);
  };

  const addToCart = (product, quantity) => {
    if (!selectedIds.includes(product.id))
      setSelectedIds([...selectedIds, product.id]);
    const existingProduct = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: quantity };
          } else {
            return cartItem;
          }
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <div className="product">
      <div className="info">
        <div>
          <img src="src/assets/images/logo.jpg" alt="product" />
          <div>
            <p className="product_name">{product.title}</p>
            <p className="product_price">{product.price}</p>
          </div>
        </div>
      </div>
      <div className="controls">
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
          value={value}
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
      <Button cls="AddToCart" onClick={handleAddToCartBtnClick}>
        Add To Cart
      </Button>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
