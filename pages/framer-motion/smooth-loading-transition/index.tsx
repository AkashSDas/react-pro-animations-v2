import Banner from "@components/framer-motion/smooth-loading-transition/Banner";
import Header from "@components/framer-motion/smooth-loading-transition/Header";
import Loader from "@components/framer-motion/smooth-loading-transition/Loader";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// Because of missing types in AnimateSharedLayout using SharedLayout to avoid
// TS errors
const SharedLayout: React.FunctionComponent<any> = AnimateSharedLayout;

const SmoothLoadingTransition = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");

    // Hide the document scrollbar
    document.body.style.overflow = "hidden";
  }, [loading]);

  return (
    <SharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="smooth-loading-transition-loading">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
                <motion.div
                  layoutId="main-card"
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  className="bg-[#8E06E2] w-[90%] h-[400px] relative rounded-3xl bottom-[-300px] -z-50 block"
                ></motion.div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </SharedLayout>
  );
};

export default SmoothLoadingTransition;
