import Button from "../button/Button";
import styles from "./Carousel.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  let hasPrev = activeIndex > 0;
  let hasNext = activeIndex < data.length - 1;

  const handleNexClick = () => {
    if (hasNext) {
      setActiveIndex((activeIndex) => activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }

  const handlePrevClick = () => {
    if (hasPrev) {
      setActiveIndex((activeIndex) => activeIndex - 1);
    } else {
      setActiveIndex(data.length - 1);
    }
  }


  if (error) return <p className={styles.error}>{`An error occured: ${error} resource`}</p>
  if (loading) return <p>Loading...</p>
  return (
    <section aria-label="New Additions" className={styles.carousel}>
      <div className={styles.frame}>
        <div className={styles.slides}>
          {data.map((product, index) => {
            return <div key={product.id}
            className={
              styles.slide + (activeIndex === index ? " " + styles.active : "") + " " + styles.fade
            }
          >
            <img src={product.image} />
          </div>
          })}
        </div>
        <Button
          cls={`${styles.carouselButton} ${styles.next}`}
          onClick={handleNexClick}
        >
          <ArrowBigRight size={50} fill="black" />
        </Button>
        <Button cls={styles.carouselButton} onClick={handlePrevClick}>
          <ArrowBigLeft size={50} fill="black"/>
        </Button>
      </div>
    </section>
  );
};
export default Carousel;
