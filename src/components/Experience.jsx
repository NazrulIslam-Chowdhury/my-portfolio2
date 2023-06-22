import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';


const ExperienceCard = ({ experience }) => (
  <VerticalTimeline>
    <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className=' w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc space-y-2 pl-2'>
        {
          experience.points.map((point, index) => (
            <li key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))
        }
      </ul>
    </VerticalTimelineElement >
  </VerticalTimeline>
)

const Experience = () => {
  return (
    <motion.section variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      id='work'>
      <motion.div variants={textVariant()}>
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
          What i have done
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))
        }
      </div>
    </motion.section>
  )
}

export default Experience