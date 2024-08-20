import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const data = [
    {
      id: 0,
      title: "title",
      price: "20",
      category: "electronics",
      description: "description",
      image: "src/assets/images/logo.jpg",
    },
    {
      id: 1,
      title: "title",
      price: "20",
      category: "jewellery",
      description: "description",
      image: "src/assets/images/logo.jpg",
    },
  ];
  const [cartItems, setCartItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const itemsInCart = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <NavBar items={itemsInCart} />
      <Outlet
        context={{ selectedIds, setSelectedIds, data, cartItems, setCartItems, itemsInCart }}
      />
      <Footer />
    </>
  );
}

export default App;
