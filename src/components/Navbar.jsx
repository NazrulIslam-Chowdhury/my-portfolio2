import { Link } from "react-router-dom"
import { useState } from "react"

import { navLinks } from "../constants/index"
import { logo, menu, close, image } from "../../public/assets";



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const link = "https://drive.google.com/file/d/1ipt94NgHMX93enoyp1Reue32AHPWlaxa/view?usp=drive_link";
  return (
    <nav
      className='sm:px-16 px-6 w-full flex items-center fixed top-0 z-20 backdrop-blur-2xl'
    >
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
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Nazrul <br /><span className="hidden md:inline lg:inline">Islam</span> Chowdhury
          </p>
        </Link>
        <ul className="list-none lg:flex hidden flex-row gap-10">
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "border-b-4 border-solid" : "text-secondary"}hover:text-white hover:border-b-4 hover:border-solid text-[18px] font-medium cursor-pointer transition-all`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
          <li
            className={`${active === link.title ? "border-b-4 border-solid transition-all" : "text-secondary"
              }hover:text-white hover:border-b-4 hover:border-solid text-[16px] font-medium font-poppins cursor-pointer transition-all `}
            onClick={() => window.open(link)}>
            Download Resume
          </li>
        </ul>
        <div className=" lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px h-[20px] object-contain cursor-pointer absolute z-[11] mr-2"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-100 absolute top-0 right-0 w-screen h-screen z-10 rounded`}>
            <ul className="list-none flex flex-col gap-4 justify-center items-center w-full">
              <li>
                <img src={logo} alt="logo" className="w-32 h-32 object-contain" />
              </li>
              {
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ? "border-b-4 border-solid transition-all" : "text-secondary"
                      } hover:text-white hover:border-b-4 hover:border-solid text-[16px] font-medium font-poppins cursor-pointer transition-all`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
              <li
                className={`${active === link.title ? "border-b-4 border-solid transition-all" : "text-secondary"
                  } hover:text-white hover:border-b-4 hover:border-solid text-[16px] font-medium font-poppins cursor-pointer transition-all`}
                onClick={() => window.open(link)}
              >
                Download Resume
              </li>
              <li className="flex flex-row gap-3 items-center mr-20">
                <img src={image} alt="Nazrul Islam Chowdhury" className="w-24 h-24 object-cover rounded-full" />
                <p>Nazrul Islam Chowdhury</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar