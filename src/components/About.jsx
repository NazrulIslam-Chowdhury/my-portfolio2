import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { services } from "../constants";
// import { Tilt } from 'react-tilt';
import { image4 } from "../../public/assets";

const letterVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const letterTransition = { duration: 0.5, ease: "easeOut" };

const ServiceCard = ({ index, title, icon }) => {
  return (
    // <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full xs:w-[250px] p-[1px] bg-white rounded-3xl"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col group"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-secondary text-[20px] font-bold text-center ">
          {title}
        </h3>
      </div>
    </motion.div>
    // </Tilt>
  );
};

const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      id="about"
    >
      <motion.div>
        <p className="text-gray-700 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] uppercase">
          Introduction
        </p>
        <motion.h2 className="text-secondary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition }}
          >
            O
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.1 }}
          >
            V
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.2 }}
          >
            E
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.3 }}
          >
            R
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.4 }}
          >
            V
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.5 }}
          >
            I
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.6 }}
          >
            E
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.7 }}
          >
            W
          </motion.span>
        </motion.h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer with experience in Javascript and have
        familiarity with Typescript, and expertise in frameworks like React JS,
        Node JS,CSS library like (Tailwind,Bootstrap and Material UI) and
        Non-RDMS MongoDB . I'm a quick learner and collaborate closely with
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. Let's work together to bring your ideas to
        life!
      </motion.p>

      <div className="flex justify-center">
        <div
          className="relative mt-20 w-60 h-60 sm:h-96 sm:w-96 bg-primary overflow-hidden rounded-full
      spin before:absolute before:inset-x-[70px] 
      before:sm:inset-x-[100px]
      before:inset-y-[-10px] before:bg-gradient-to-l before:duration-500 before:from-gray-300 before:to-black
      after:absolute after:inset-[6px] after:bg-primary after:rounded-full after:z-[1]
      hover:before:inset-x-0 hover:before:inset-y-[-20px]"
        >
          <div className="absolute inset-[30px] border-solid border-[6px] border-primary z-[3] rounded-full overflow-hidden">
            <img
              src={image4}
              alt=""
              className="absolute top-0 left-0 w-full h-full rounded-full object-cover brightness-75"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;
