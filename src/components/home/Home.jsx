import Button from "../button/Button";
import Carousel from "../carousel/Carousel";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

const Home = () => {
  return (
    <main className={styles.homepage}>
      <section>
        <p className={styles.intro}>
          High quality products!
          <br/>
          Just a button&apos;s click away.
        </p>
        <Link to="catalog" className={styles.remdec}>
          <Button cls={styles.shopNowBtn}>
            Shop Now
            <ArrowBigRight />
          </Button>
        </Link>
      </section>
      <Carousel/>
    </main>
  );
};

export default Home;
