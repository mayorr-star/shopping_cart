import { useState } from "react";
import { PlusSquare, MinusSquare } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Button from "../button/Button";

const Card = () => {
  const [value, setValue] = useState(0);
  const [itemsNum, setItemsNum] = useOutletContext();

  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value)
    setValue((inputValue));
  };

  const handelIncBtnClick = () => {
    setValue((value) => value + 1);
  };

  const handelDecBtnClick = () => {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue((value) => value - 1);
    }
  };

  const handleAddToCartClick = () => {
    setItemsNum(itemsNum => itemsNum + value);
    setValue(0)
  }
  return (
    <div>
      <div>
        <div>
          <img src="src/assets/images/logo.jpg" />
        </div>
        <p>Bags</p>
        <p> 45 dollars</p>
      </div>
      <div>
        <Button onClick={handelDecBtnClick}>
          <MinusSquare />
        </Button>
        <input
          type="number"
          name="itemNum"
          id="itemNum"
          value={value}
          onChange={handleInputChange}
        />
        <Button onClick={handelIncBtnClick}>
          <PlusSquare />
        </Button>
      </div>
      <Button onClick={handleAddToCartClick}>Add to Cart</Button>
    </div>
  );
};

export default Card;
