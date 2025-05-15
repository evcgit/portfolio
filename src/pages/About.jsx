import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
	return (
		<div className="bg-background text-white flex flex-col items-center py-32 px-4 md:px-8 lg:px-16">
			<div className="flex flex-col md:flex-row items-center gap-32 max-w-4xl w-full">
				<div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
					<img
						src={profile}
						alt="Profile"
						className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
					/>
				</div>
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-6xl md:text-4xl font-bold mb-3">Evan Cortez</h1>
					<h5 className="text-lg leading-relaxed">
						Information Systems BS
					</h5>
					<p className="text-lg leading-relaxed">
						Welcome to my bio!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
