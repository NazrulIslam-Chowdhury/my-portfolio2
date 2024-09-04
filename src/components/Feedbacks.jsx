import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { testimonials } from "../constants";

const letterVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const letterTransition = { duration: 0.5, ease: "easeOut" };

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-white p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-gray-700 font-black text-[48px]">''</p>
      <div className="mt-1">
        <p className="text-gray-700 tracking-wider text-[18px]">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-12 rounded-[20px]"
    >
      <div className="rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10">
        <motion.div>
          <p className="sm:text-[18px] text-[14px] text-gray-700 uppercase tracking-wider">
            What others say
          </p>
          <motion.h2 className="text-secondary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition }}
            >
              T
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.1 }}
            >
              e
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.2 }}
            >
              s
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
              i
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.5 }}
            >
              m
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.6 }}
            >
              o
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.7 }}
            >
              n
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.8 }}
            >
              i
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 0.9 }}
            >
              a
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 1 }}
            >
              l
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterVariants}
              transition={{ ...letterTransition, delay: 1.1 }}
            >
              s
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </motion.section>
  );
};

export default Feedbacks;
