import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

const letterVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const letterTransition = { duration: 0.5, ease: "easeOut" };

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#fff", color: "#151030" }}
    contentArrowStyle={{ borderRight: "7px solid #fff" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className=" w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-secondary text-[24px] font-bold">
        {experience.title}
      </h3>
      <a
        href={experience?.link || "/"}
        target="_blank"
        rel="noreferrer"
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </a>
    </div>

    <ul className="mt-5 list-disc space-y-2 pl-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-secondary text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      id="work"
    >
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-gray-700 uppercase tracking-wider">
          What i have done
        </p>
        <motion.h2 className="text-secondary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition }}
          >
            Work
          </motion.span>{" "}
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.1 }}
          >
            Experience
          </motion.span>{" "}
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.2 }}
          >
            and
          </motion.span>{" "}
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={letterVariants}
            transition={{ ...letterTransition, delay: 0.3 }}
          >
            Education
          </motion.span>
        </motion.h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
