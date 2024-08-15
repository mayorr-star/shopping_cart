import NavBar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [itemsNum, setItemsNum] = useState(0)

  return (
    <>
      <NavBar itemsNum={itemsNum}/>
      <Outlet context={[itemsNum, setItemsNum]}/>
    </>
  );
}

export default App;
