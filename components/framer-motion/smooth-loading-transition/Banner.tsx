import { useEffect, useState } from "react";
import styles from "@styles/framer-motion/smooth-loading-transition/Banner.module.scss";

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);

  return (
    <div className={styles["banner"]}>
      <BannerRowTop title="brand" />
      <BannerRowCenter title="experience" playMarquee />
      <BannerRowBottom title="studio" />
    </div>
  );
};

const AnimatedLetters = ({ title }) => (
  <span className={styles["row-title"]}>
    {[...title].map((letter) => (
      <span className={styles["row-letter"]}>{letter}</span>
    ))}
  </span>
);

const BannerRowTop = ({ title }: { title: string }) => {
  return (
    <div className={styles["banner-row"]}>
      <div className={styles["row-col"]}>
        <AnimatedLetters title={title} />
      </div>
      <div className={styles["row-col"]}>
        <span className={styles["row-msg"]}>
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </div>
    </div>
  );
};

const BannerRowBottom = ({ title }: { title: string }) => {
  return (
    <div className={`${styles["banner-row"]} ${styles["center"]}`}>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({
  title,
  playMarquee,
}: {
  title: string;
  playMarquee: boolean;
}) => {
  return (
    <div
      className={`${styles["banner-row"]} ${styles["marquee"]} ${
        playMarquee && styles["animate"]
      }`}
    >
      <div className={styles["marquee__inner"]}>
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default Banner;
