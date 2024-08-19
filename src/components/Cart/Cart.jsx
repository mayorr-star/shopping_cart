import { useOutletContext } from "react-router-dom";
import { MinusSquare, PlusSquare, Trash2 } from "lucide-react";
import Button, { CardButton } from "../button/Button";
import { useState } from "react";
import PropTypes from "prop-types";

const Cart = () => {
  const { selectedIds, cartItems, itemsInCart } = useOutletContext();
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handelCheckOut = () => {
    setIsCheckedOut(true);
  };

  const totalCost = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
  return (
    <>
      {selectedIds.length === 0 ? (
        <div>
          <p>No Items added to cart yet</p>
        </div>
      ) : (
        <>
          <header>
            <h1>Items In Cart</h1>
          </header>
          <main>
            <div className="cart_items">
              <ul>
                {cartItems.map((cartItem) => (
                  <li key={cartItem.id}>
                    <ProductCard product={cartItem} />
                  </li>
                ))}
              </ul>
            </div>
            <p>Total Cost: {totalCost} GHC</p>
            <Button cls="checkout" onClick={handelCheckOut}>
              Checkout
            </Button>
            {isCheckedOut && (
              <div className="purchase">
                <div>
                  <p>
                    You purchased {itemsInCart} items worth {totalCost} GHC
                  </p>
                </div>
              </div>
            )}
          </main>
        </>
      )}
    </>
  );
};

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
    <div className="product">
      <div className="info">
        <div>
          <img src="src/assets/images/logo.jpg" alt="product" />
          <div>
            <p className="product_name">{product.title}</p>
            <p className="product_price">{`Price: ${product.price}`}</p>
            <p className="quantity">{`Quantity: ${product.quantity}`}</p>
            <p className="total_cost">{`${product.price} x ${
              product.quantity
            } = ${Number(product.price) * product.quantity}`}</p>
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
      <CardButton ariaLabel="Remove from cart" onClick={handleRemove}>
        <Trash2 />
      </CardButton>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};
export default Cart;
