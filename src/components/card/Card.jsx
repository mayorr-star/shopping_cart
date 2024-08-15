import { useState } from "react";
import Button from "../button/Button";
import { PlusSquare, MinusSquare } from "lucide-react";

const Card = () => {
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handelIncBtnClick = () => {
    setValue((value) => value + 1);
  };

  const handelDecBtnClick = () => {
    setValue((value) => value - 1);
  };

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
            <MinusSquare/>
        </Button>
        <input
          type="number"
          name="itemNum"
          id="itemNum"
          value={value}
          onChange={handleInputChange}
        />
        <Button onClick={handelIncBtnClick}>
            <PlusSquare/>
        </Button>
      </div>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default Card;
