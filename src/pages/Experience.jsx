import React, { useState } from "react";
import ExperienceItem from "../components/ExperienceItem";

const experiences = [
    {
        title: "Software Engineer",
        company: "Tech Company A",
        date: "Jan 2020 - Present",
        description: "Worked on developing and maintaining web applications..."
    },
    {
        title: "Front End Developer",
        company: "Startup B",
        date: "Jun 2018 - Dec 2019",
        description: "Built user interfaces with React and improved UX..."
    },
    {
        title: "Intern",
        company: "Company C",
        date: "Jan 2018 - May 2018",
        description: "Assisted in various development tasks and learned key skills..."
    },
    {
        title: "Freelancer",
        company: "Self-employed",
        date: "2017 - 2018",
        description: "Worked on multiple freelance projects involving web development..."
    }
];

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

    return (
        <div className="flex flex-col justify-center p-4 bg-background">
					<h1 className="text-8xl font-bold mb-24 text-white text-center">Experience</h1>
						<div className="flex p-8 justify-around items-center">
            	<div className="w-fit">
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
            	<div className="w-1/3 p-4 text-xl border-8 rounded-2xl text-white h-80">
            	    <p>{selectedExperience.description}</p>
            	</div>
						</div>
        </div>
    );
};

export default Experience;
