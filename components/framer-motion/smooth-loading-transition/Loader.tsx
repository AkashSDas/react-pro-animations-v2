import { useEffect } from "react";

const Loader = ({ setLoading }: { setLoading: Function }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="loader ">
      <Block styles="bg-[#FA1C1C] w-[270px] h-[360px] left-[5%] top-[12%]" />
      <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
        <Block styles="bg-[#8E06E2] w-[550px] h-[360px]" />
      </div>
      <Block styles="bg-[#DDC700] w-[270px] h-[360px] right-[5%] top-[8%]" />
      <Block styles="bg-[#ED0791] w-[369px] h-[235px] left-[14%] bottom-[2%]" />
      <Block styles="bg-[#3CDE38] w-[369px] h-[235px] right-[6%] bottom-[6%]" />
    </div>
  );
};

const Block = ({ styles }: { styles: string }) => {
  return (
    <div
      className={`${styles} absolute origin-center flex justify-center items-center rounded-3xl`}
    >
      {" "}
    </div>
  );
};

export default Loader;
