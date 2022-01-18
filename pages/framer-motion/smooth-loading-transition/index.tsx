import Banner from "@components/framer-motion/smooth-loading-transition/Banner";
import Header from "@components/framer-motion/smooth-loading-transition/Header";
import Loader from "@components/framer-motion/smooth-loading-transition/Loader";
import { useEffect, useState } from "react";

const SmoothLoadingTransition = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && <div></div>}
        </>
      )}
    </>
  );
};

export default SmoothLoadingTransition;
