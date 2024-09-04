import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants/index";
import { logo, menu, close, image } from "../../public/assets";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const link =
    "https://drive.google.com/file/d/1auMzlAb1qCr5UTVpXO3sgCCeuKkyy-tb/view?usp=drive_link";
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-32 h-32 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer uppercase">
            Nazrul <br />
            <span className="hidden md:inline lg:inline">Islam</span> Chowdhury
          </p>
        </Link>
        <ul className="list-none lg:flex hidden flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "" : "text-secondary"
              }hover:text-white after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:duration-300 text-[16px] font-medium cursor-pointer transition-all uppercase relative`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            className={`${
              active === link.title ? "" : "text-secondary"
            }hover:text-black after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:duration-500 text-[16px] font-medium font-poppins cursor-pointer transition-all uppercase relative overflow-hidden`}
            onClick={() => window.open(link)}
          >
            Download Resume
          </li>
        </ul>
        <div className=" lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain cursor-pointer absolute z-[11] mr-2"
            onClick={() => setToggle(!toggle)}
          />
          <motion.nav
            animate={toggle ? "open" : "closed"}
            variants={sidebar}
            className={`p-6 bg-black absolute top-0 right-0 w-screen h-screen z-10 rounded`}
          >
            <ul className="list-none flex flex-col gap-4 justify-center items-center w-full">
              <li>
                <img
                  src={logo}
                  alt="logo"
                  className="w-32 h-32 object-contain"
                />
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "border-b-4 border-solid transition-all"
                      : "text-secondary"
                  } hover:text-white hover:border-b-4 hover:border-solid text-[16px] font-medium font-poppins cursor-pointer transition-all`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className={`${
                  active === link.title
                    ? "border-b-4 border-solid transition-all"
                    : "text-secondary"
                } hover:text-white hover:border-b-4 hover:border-solid text-[16px] font-medium font-poppins cursor-pointer transition-all`}
                onClick={() => window.open(link)}
              >
                Download Resume
              </li>
              <li className="flex flex-row gap-3 items-center mr-20">
                <img
                  src={image}
                  alt="Nazrul Islam Chowdhury"
                  className="w-24 h-24 object-cover rounded-full"
                />
                <p>Nazrul Islam Chowdhury</p>
              </li>
            </ul>
          </motion.nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
