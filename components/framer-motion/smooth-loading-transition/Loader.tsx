import { motion, Variants } from "framer-motion";

const container = {
  animate: { transition: { staggerChildren: 0.35 } },
};

const item = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: "easeInOut", duration: 0.8 },
  },
};

const itemMain = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 },
  },
};

const Loader = ({ setLoading }: { setLoading: Function }) => {
  return (
    <motion.div
      className="loader"
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <Block
        variants={item}
        styles="bg-[#FA1C1C] w-[240px] h-[300px] left-[10%] top-[8%]"
      />
      <motion.div
        variants={itemMain}
        className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center"
      >
        <motion.div
          layoutId="main-card"
          className="bg-[#8E06E2] w-[500px] h-[300px] absolute origin-center flex justify-center items-center rounded-3xl"
        />
      </motion.div>
      <Block
        variants={item}
        styles="bg-[#DDC700] w-[240px] h-[300px] right-[10%] top-[8%]"
      />
      <Block
        variants={item}
        styles="bg-[#ED0791] w-[300px] h-[200px] left-[12%] bottom-[8%]"
      />
      <Block
        variants={item}
        styles="bg-[#3CDE38] w-[300px] h-[200px] right-[12%] bottom-[6%]"
      />
    </motion.div>
  );
};

const Block = ({
  styles,
  variants,
}: {
  styles: string;
  variants: Variants;
}) => {
  return (
    <motion.div
      variants={variants}
      className={`${styles} absolute origin-center flex justify-center items-center rounded-3xl`}
    ></motion.div>
  );
};

export default Loader;
