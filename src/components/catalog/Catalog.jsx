import { useState } from "react";
import Card from "../card/Card";
import { useOutletContext } from "react-router-dom";

const Catalog = () => {
  const { data } = useOutletContext();
  const [filter, setFilter] = useState("all products");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <header>
        <h1>{filter}</h1>
        <div className="filters">
          <div>
            <label htmlFor="allProducts">All Products</label>
            <input
              type="radio"
              id="allProducts"
              name="filter_type"
              value="all products"
              checked={filter === "all products"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="electronics">Electronics</label>
            <input
              type="radio"
              id="electronics"
              name="filter_type"
              value="electronics"
              checked={filter === "electronics"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="mens'clothing">Men&apos;s clothing</label>
            <input
              type="radio"
              id="mens'clothing"
              name="filter_type"
              value="men's clothing"
              checked={filter === "men's clothing"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="women's clothing">women&apos;s clothing</label>
            <input
              type="radio"
              id="women's clothing"
              name="filter_type"
              value="women's clothing"
              checked={filter === "women's clothing"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="jewellery">Jewellery</label>
            <input
              type="radio"
              id="jewellery"
              name="filter_type"
              value="jewellery"
              checked={filter === "jewellery"}
              onChange={handleChange}
            />
          </div>
        </div>
      </header>
      <main>
        <ul>
          {filter === "all products"
            ? data.map((product) => (
                <li key={product.id}>
                  <Card product={product} />
                </li>
              ))
            : data
                .filter((product) => product.category === filter)
                .map((product) => (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                ))}
        </ul>
      </main>
    </>
  );
};

export default Catalog;
