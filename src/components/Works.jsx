import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { RiLiveFill } from 'react-icons/ri';


const ProjectCard = ({ index, name, description, tags, source_code_link, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <RiLiveFill className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>

        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-5">
          {
            tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <motion.section variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          My Projects
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase of my skills and experience through real-world examples of my work.Each project briefly described with links to code repositories and live demos in it.It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project}
              index={index}
            />
          ))
        }
      </div>
    </motion.section>
  )
}

export default Works