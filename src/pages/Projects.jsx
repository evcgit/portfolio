import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../data";
import SectionWrapper from "../components/SectionWrapper";
import { styles } from "../components/Motion";
import { fadeIn, textVariant } from "../components/Motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  link,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className="relative w-full md:w-3/5">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="project_image"
              className="w-full h-auto object-cover md:rounded-3xl cursor-pointer"
            />
          </a>
        ) : (
          <img
            src={image}
            alt="project_image"
            className="w-full h-auto object-cover md:rounded-3xl"
          />
        )}
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight">{name}</h3>
        <p
          className="mt-4 text-accent text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl"
          dangerouslySetInnerHTML={{ __html: description }} // Rendering the description as HTML
        />
      </div>
    </motion.div>
  );
};



const Projects = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40 bg-background min-h-screen">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Personal Projects</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
