import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import StarCanvas from "./components/canvas/Stars";
import Footer from "./components/Footer";
import { image2 } from "../public/assets";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { slideIn, staggerContainer } from "./utils/motion";
import UpArrow from "./components/UpArrow";

const App = () => {
  useEffect(() => {
    const backgroundImage = document.querySelector(".background-image");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.1; // Adjust the speed as needed
      backgroundImage.style.transform = `translate3d(0, -${
        scrollY * parallaxSpeed
      }px, 0)`;
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-black overflow-hidden background-image"
        >
          <motion.div className="absolute h-screen">
            <motion.img
              variants={slideIn("left", "tween", 0.2, 1)}
              src={image2}
              alt="image"
              className="h-full w-[50dvw] object-cover brightness-50"
            />
          </motion.div>
          <Navbar />
          <div className="">
            <Hero />
          </div>
        </motion.div>
        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarCanvas />
            {/* <Footer /> */}
          </div>
          <UpArrow />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
