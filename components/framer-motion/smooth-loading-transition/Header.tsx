import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
      className="flex justify-between items-center mx-16 my-10"
    >
      <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-lightPink to-lightPurple">
        smooth
      </div>
      <nav className="flex space-x-12 list-none font-medium">
        {["Design", "Cases", "About", "Why work with us?"].map((text) => (
          <li>
            <Link href="#">
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </nav>
      <Button onClick={() => {}} text="Get started" />
    </motion.header>
  );
};

export default Header;
