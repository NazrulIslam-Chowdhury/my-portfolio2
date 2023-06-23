import Computers from "./canvas/Computers"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className='sm:px-16 px-6 absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-50 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi, I'm <span className="text-[#915eff]">Nazrul</span></h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I develop 3D visuals, user <br className="sm:block hidden" /> interfaces and web application.
          </p>
        </div>
      </div>

      <Computers />

      <div className="absolute xs:bottom-2 bottom-44 w-full flex justify-center items-center">
        <a href='#about'>
          <div className="w-[35px] h-[64px] rounded-3xl border-spacing-4 border-secondary border-4 flex justify-center items-center p-2">
            <motion.div animate={{
              y: [-16, 24, -16]
            }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Hero;