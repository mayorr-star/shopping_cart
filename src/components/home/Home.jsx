import Button from "../button/Button";
import styles from "./Home.module.css";
import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

const Home = () => {
  return (
    <main className={styles.homepage}>
      <section className={styles.infoLink}>
        <p className={styles.sum_info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          dolorum ea repudiandae corrupti laboriosam magni minima cupiditate
          iusto quia non a fugiat harum doloremque, eum quam et aspernatur
          quaerat enim.
        </p>
        <Link to="catalog" className={styles.rm}>
          <Button text="Shop Now" cls={styles.shopNowBtn}>
            Shop Now
            <ArrowBigRight />
          </Button>
        </Link>
      </section>
      <Carousel />
    </main>
  );
};

export default Home;
