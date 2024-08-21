import { useOutletContext } from "react-router-dom";
import Button from "../button/Button";
import ProductCard from "../productCard/ProductCard";

import styles from "./Cart.module.css";

const Cart = () => {
  const { selectedIds, cartItems,  } = useOutletContext();

  const totalCost = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
  return (
    <>
      {selectedIds.length === 0 ? (
        <div className={styles.empty}>
          <p>No Items added to cart yet</p>
        </div>
      ) : (
        <>
          <header className={styles.center}>
            <h1>Items In Cart</h1>
          </header>
          <main className={styles.content}>
            <div className={styles.cart_items}>
              <ul className={styles.listItems}>
                {cartItems.map((cartItem) => (
                  <li key={cartItem.id}>
                    <ProductCard product={cartItem} />
                  </li>
                ))}
              </ul>
            </div>
              <p className={styles.totalCost}>Total Cost: {totalCost} GHC</p>
            <div className={styles.checkoutWrapper}>
              <Button cls={styles.checkout}>
                Checkout
              </Button>
            </div>
          </main>
        </>
      )}
    </>
  );
};



export default Cart