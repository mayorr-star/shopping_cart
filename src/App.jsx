import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch("https://fakestoreapi.com/products")
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error(`HTTP error: Status ${reponse.status}`);
        }
        return reponse.json();
      })
      .then((reponse) => {
        if (!ignore) {
          setData(reponse);
          setError(null);
          console.log(reponse);
        }
      })
      .catch((error) => {
        setError(error);
        setData(null);
        console.log(error);
      })
      .finally(setLoading(false));

    return () => (ignore = true);
  }, []);

  const itemsInCart = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  if (loading) {
    return (
      <div className="spinner_wrapper">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <p className="error_text">An error occured. Failed to load.</p>
      </div>
    );
  } else {
    return (
      <>
        {}
        <NavBar items={itemsInCart} />
        <Outlet
          context={{
            selectedIds,
            setSelectedIds,
            data,
            cartItems,
            setCartItems,
            itemsInCart,
          }}
        />
        <Footer />
      </>
    );
  }
}

export default App;
