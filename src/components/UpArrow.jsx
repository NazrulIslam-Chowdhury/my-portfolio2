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
    <div>
      <a
        href="#"
        className={`${showArrow ? "fixed bottom-0 right-2" : "-right-2"} duration-300`}
      >
        <AiOutlineArrowUp className="w-14 h-20 animate-bounce" />
      </a>
    </div>
  );
};

export default UpArrow;
