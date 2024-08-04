import React from "react";
import clsx from "clsx";

const ExperienceItem = ({ title, company, date, onClick, selected }) => {
    return (
        <div
            className={clsx(
                "cursor-pointer mb-2 p-4 transition-colors duration-300 rounded",
                selected ? "text-white border-l-4 md:border-l-8 border-accent" : "text-text"
            )}
            onClick={onClick}
        >
            <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
            <h3 className="text-base md:text-2xl">{company} | {date}</h3>
        </div>
    );
};

export default ExperienceItem;
