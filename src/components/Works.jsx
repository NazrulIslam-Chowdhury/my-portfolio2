import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../../public/assets";
import { RiLiveFill } from "react-icons/ri";

const letterVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const letterTransition = { duration: 0.5, ease: "easeOut" };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  live_demo_link,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-[26rem] group relative overflow-hidden cursor-pointer"
    >
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-tr-3xl rounded-bl-3xl sm:w-[360px] w-full"
      > */}
      <div className="absolute w-full h-full">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <div className="absolute w-full h-full top-0 left-0 z-10 bg-black/75 translate-x-[100%] group-hover:translate-x-0 duration-500">
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2 ">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-3xl"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(live_demo_link, "_blank")}
            className="black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-3xl"
          >
            <RiLiveFill className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="flex flex-col gap-5 p-10">
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] uppercase">
              {name}
            </h3>
            <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-5">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-gray-700 uppercase tracking-wider">
          My Projects
        </p>
        <motion.h2 className="text-secondary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition }}
          >
            p
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.1 }}
          >
            r
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.2 }}
          >
            o
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.3 }}
          >
            j
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.4 }}
          >
            e
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
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.7 }}
          >
            s
          </motion.span>
        </motion.h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase of my skills and experience through
          real-world examples of my work.Each project briefly described with
          links to code repositories and live demos in it.It reflects my ability
          to solve complex problems, work with different technologies, and
          manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Works;
