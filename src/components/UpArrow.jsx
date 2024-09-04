import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const UpArrow = () => {
  // show arrow
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <a
        href="#"
        className={`${
          showArrow ? "fixed bottom-2 right-2" : "-right-2 bottom-2"
        } duration-500 bg-white p-3`}
      >
        <AiOutlineArrowUp className="w-12 h-12 text-black" />
      </a>
    </>
  );
};

export default UpArrow;
