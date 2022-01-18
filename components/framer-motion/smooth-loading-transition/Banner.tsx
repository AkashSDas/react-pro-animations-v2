import { useEffect, useState } from "react";
import styles from "@styles/framer-motion/smooth-loading-transition/Banner.module.scss";
import { motion } from "framer-motion";

const banner = {
  animate: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } },
};

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div variants={banner} className={styles["banner"]}>
      <BannerRowTop title="brand" />
      <BannerRowCenter title="experience" playMarquee />
      <BannerRowBottom title="studio" />
    </motion.div>
  );
};

const AnimatedLetters = ({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) => (
  <motion.span
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
    className={styles["row-title"]}
  >
    {[...(title as any)].map((letter) => (
      <motion.span variants={letterAnimation} className={styles["row-letter"]}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }: { title: string }) => {
  return (
    <div className={styles["banner-row"]}>
      <div className={styles["row-col"]}>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        className={styles["row-col"]}
      >
        <span className={styles["row-msg"]}>
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
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
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
