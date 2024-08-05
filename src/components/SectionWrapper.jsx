import { motion } from "framer-motion";
import { staggerContainer } from "./Motion";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='px-0 2xl:px-60 py-5 2xl:py-10 max-w-full relative z-0 bg-background'
      >
        <span className='hash-span' id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
