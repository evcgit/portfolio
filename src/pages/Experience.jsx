import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";
import SectionWrapper from "../components/SectionWrapper";
import { styles } from "../components/Motion";
import { textVariant } from "../components/Motion";
import ExperienceItem from "../components/ExperienceItem";
import ExperienceDetails from "../components/ExperienceDetails";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20 min-h-screen bg-background">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>Experience</h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`experience-${index}`}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              onClick={() => setSelectedExperience(experience)}
              selected={selectedExperience === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <ExperienceDetails description={selectedExperience.description} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
