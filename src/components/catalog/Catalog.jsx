import Card from "../card/Card";
import styles from "./Catalog.module.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Catalog = () => {
  const { data } = useOutletContext();
  const [activeFilter, setActiveFilter] = useState("all products");
  let filters = null;

  if (data) {
    const datasArray = data.map((item) => item.category);
    filters = [...new Set(datasArray)];
  }

  const handleChange = (e) => {
    setActiveFilter(e.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>{activeFilter}</h1>
        <div className={styles.filter}>
          <div>
            <label htmlFor="allProducts">All Products</label>
            <input
              type="radio"
              id="allProducts"
              name="filter_type"
              value="all products"
              checked={activeFilter === "all products"}
              onChange={handleChange}
            />
          </div>
          {filters &&
            filters.map((filter, index) => {
              return (
                <div key={index}>
                  <label htmlFor={filter}>{filter}</label>
                  <input
                    type="radio"
                    id={filter}
                    name="filter_type"
                    value={filter}
                    checked={activeFilter === filter}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
        </div>
      </header>
      <main>
        <ul className={`${styles.products} ${styles.grid}`}>
          {data &&
            (activeFilter === "all products"
              ? data.map((product) => (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                ))
              : data
                  .filter((product) => product.category === activeFilter)
                  .map((product) => (
                    <li key={product.id}>
                      <Card product={product} />
                    </li>
                  )))}
        </ul>
      </main>
    </>
  );
};

export default Catalog;
