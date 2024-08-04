import React, { useState } from "react";
import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data";
import DOMPurify from 'dompurify';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

    return (
        <div className="flex flex-col justify-center p-4 bg-background min-h-screen">
            <h1 className="text-4xl md:text-8xl font-bold mb-12 md:mb-24 text-white text-center">Experience</h1>
            <div className="flex flex-col md:flex-row p-4 md:p-8 justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-fit space-y-4">
                    {experiences.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            title={exp.title}
                            company={exp.company}
                            date={exp.date}
                            onClick={() => setSelectedExperience(exp)}
                            selected={selectedExperience === exp}
                        />
                    ))}
                </div>
                <div className="w-full md:w-1/3 p-4 mb-8 font-bold text-lg md:text-xl border-4 md:border-8 rounded-2xl text-text h-96">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedExperience.description) }} />
                </div>
            </div>
        </div>
    );
};

export default Experience;
