import { useState, useEffect } from "react";
import { CardButton } from "../button/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageUrls, setImageurls] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error(`HTTP error: Status ${reponse.status}`);
        }
        return reponse.json();
      })
      .then((reponse) => {
        if (!ignore) {
          setImageurls(reponse);
          console.log(reponse);
          setError(null);
        }
      })
      .catch((error) => {
        setError(error);
        setImageurls(null);
        console.log(error)
      })
      .finally(setLoading(false));

    return () => (ignore = true);
  }, []);

  useEffect(() => {
    if (imageUrls) {
      const autoSlide = setInterval(() => {
        setActiveIndex((activeIndex) =>
          activeIndex === imageUrls.length - 1 ? 0 : activeIndex + 1
        );
      }, 5000);
      return () => clearInterval(autoSlide);
    }
  }, [imageUrls]);

  const handelNextSlide = () => {
    if (imageUrls) {
      activeIndex < imageUrls.length - 1
        ? setActiveIndex((activeIndex) => activeIndex + 1)
        : setActiveIndex(0);
    }
  };

  const handelPrevSlide = () => {
    if (imageUrls) {
      activeIndex > 0
        ? setActiveIndex((activeIndex) => activeIndex - 1)
        : setActiveIndex(imageUrls.length - 1);
    }
  };

  const handleIndicatorClick = (index) => setActiveIndex(index);

  return (
    <section
      id="image-carousel"
      aria-label="Newest Additions"
      className={styles.imageCarousel}
    >
      {loading && (
        <div className={styles.loading}>
          <p>Loading images...</p>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <p className={styles.textRed700}>An error has occured. Failed to load images</p>
        </div>
      )}
      <ol className={styles.indicators}>
        {imageUrls &&
          imageUrls.map((imageUrl, index) => (
            <li
              key={imageUrl.id}
              className={`${styles.indicator} ${
                activeIndex === index && styles.active
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></li>
          ))}
      </ol>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {imageUrls &&
            imageUrls.map((image, index) => (
              <li
                key={image.id}
                style={{ backgroundImage: `url(${image.image})` }}
                className={`${styles.slide} ${styles.fade} ${
                  activeIndex === index && styles.active
                }`}
              ></li>
            ))}
          <li
            style={{ backgroundImage: "src/assests/images/bg1.jpeg" }}
            className={`${styles.slide} ${styles.fade} ${
              activeIndex === 0 && styles.active
            }`}
          ></li>
        </ul>
      </div>
      <div className={styles.controls}>
        <CardButton
          ariaLabel="next slide"
          onClick={handelNextSlide}
          cls={styles.next}
        >
          <ArrowRight />
        </CardButton>
        <CardButton
          ariaLabel="next slide"
          onClick={handelPrevSlide}
          cls={styles.prev}
        >
          <ArrowLeft />
        </CardButton>
      </div>
    </section>
  );
};

export default Carousel;
