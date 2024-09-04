import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { useRef, useState } from "react";
import EarthCanvas from "./canvas/Earth";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

// template_m8j58tf
// service_38hhx1a
// OxEsg73zjkhHeZJci1Jwt

const letterVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const letterTransition = { duration: 0.5, ease: "easeOut" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_38hhx1a",
        "template_m8j58tf",
        {
          from_name: form.name,
          user_name: form.name,
          to_name: "Nazrul",
          user_email: form.email,
          to_email: "nazrulislam66188@gmail.com",
          message: form.message,
        },
        "HXjlHLKHUos-E7lOa"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      className="bg-black overflow-hidden"
      id="contact"
    >
      <div className="custom-shape-divider-top-1725424222">
        <motion.svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            opacity=".25"
            className="shape-fill wave1"
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          ></motion.path>
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill wave2"
          ></motion.path>
          <motion.path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill wave3"
          ></motion.path>
        </motion.svg>
      </div>
      <div className="xl:flex-row flex-col-reverse flex overflow-hidden p-4">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-white p-8 rounded-2xl z-20"
        >
          <p className="sm:text-[18px] text-[14px] text-gray-700 uppercase tracking-wider">
            Get in touch
          </p>
          <motion.h3 className="text-secondary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition }}
            >
              c
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.1 }}
            >
              o
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.2 }}
            >
              n
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.3 }}
            >
              t
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.4 }}
            >
              a
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.5 }}
            >
              c
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.6 }}
            >
              t
            </motion.span>
          </motion.h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className="bg-white py-4 px-6 placeholder:text-secondary text-gray-700 rounded-lg outline-none font-medium border-[1px] border-secondary"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-white py-4 px-6 placeholder:text-secondary text-gray-700 rounded-lg outline-none font-medium border-[1px] border-secondary"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows="7"
                // type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want say?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-gray-700 rounded-lg outline-none font-medium border-[1px] border-secondary"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-2xl shadow-black hover:bg-blue-950 rounded"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 xl:h-auto md:h-[550px] h-[350px] z-20"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default Contact;
