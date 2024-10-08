import budget from "../assets/budget.png";
import AI from "../assets/AI.jpg";
import student from "../assets/student.png";
import { Link } from "react-router-dom";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  }
];


const experiences = [
	{
			title: "Full Stack Developer",
			company: "RAE",
			date: "Jul 2024 - Current", 
			description: "Maintained and updated web applications using <span style='color: white;'>Python/Django</span> for backend services and <span style='color: white;'>JavaScript/React</span> for front-end interfaces.<br/><br/>Built responsive and user-friendly web interfaces using React, incorporating state management and <span style='color: white;'>component-based architecture.</span>.<br/><br/>Troubleshot and resolved technical issues, <span style='color: white;'>improving application stability and user experience.</span>",
	},
	{
		title: "Project Manager",
		company: "RAE",
		date: "Feb 2024 - Current",
		description: "Served as a Project Manager, reviewing attic photos of homes to assess structural suitability for solar panel installation.<br/><br/>Demonstrated strong multitasking abilities and problem-solving skills to evaluate multiple projects simultaneously.<br/><br/>Ensured accurate assessments to facilitate the installation process and <span style='color: white;'>enhance operational efficiency</span>.<br/><br/>Collaborated with cross-functional teams to address structural challenges and <span style='color: white;'>optimize project outcomes.</span>"
	},	
	{
			title: "Web Developer",
			company: "MTECH",
			date: "Jan 2024 - Oct 2024",
			description: "Completed the Mountainland Technical College Web Developer program, gaining proficiency in <span style='color: white;'>HTML, CSS, JavaScript</span> for front-end development and <span style='color: white;'>SQL, Express.js</span> for backend services.<br/><br/>Implemented responsive web design principles, ensuring optimal performance across various devices and <span style='color: white;'>enhanced user experience.</span><br/><br/>Collaborated on projects, honing skills in <span style='color: white;'>version control and team-based development.</span>"
	},
	{
			title: "Market Manager",
			company: "Solcius",
			date: "Jun 2022 - Oct 2023",
			description: "Led a team as Market Manager at a solar company, overseeing installation goals and ensuring timely project completion.<br/><br/>Managed <span style='color: white;'>performance reporting</span> and addressed any issues or challenges to maintain <span style='color: white;'>project efficiency</span>.<br/><br/>Provided support and guidance to team members, resolving problems and answering questions.<br/><br/>Focused on <span style='color: white;'>customer retention</span> and <span style='color: white;'>service</span>, ensuring a high level of satisfaction and <span style='color: white;'>smooth project execution.</span>"
	}
];

const projects = [
  {
    name: "Student Registration",
    description:
      "Simple CRUD app for student registration, built with React/Tailwind and NodeJS/Postgres.<br /> Login: user/1 || a/1",
    image: student,
		link: "https://mtechcapstone.onrender.com/"
  },
  {
    name: "Budget Tracker",
    description:
      "Contributed to the development of this React and Tailwind CSS-based front-end project, designed to help users effectively track and manage expenses.",
    image: budget,
		link: "https://react-project-one-indol.vercel.app/"
  },
  {
    name: "Object Detection",
    description:
      "AI tool for object detection in attic space photos to enhance workflow at RAE, built with Python. (In Progress)",
    image: AI,
  },
];

export { experiences, navLinks, projects };
