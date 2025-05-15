import argentinamexicopic from "../assets/argentinamexicoscore.jpg";
import messitaunt from "../assets/messi-taunt.jpg";
import codingpic from "../assets/codingpic.jpeg";
import bed from "../assets/bed.jpg";
import dogpic from "../assets/dogpic.jpg";
import pimp from "../assets/pimp.jpg";
import familypic from "../assets/familypic.jpg";
import globe from "../assets/globe.jpeg";

const navLinks = [
	{
		title: "Intro",
		id: "intro"
	},
	{
		title: "Me",
		id: "me"
	},
	{
		title: "Family",
		id: "family"
	},
	{
		title: "Doggo",
		id: "doggo"
	}
]

const projects = [
  {
    name: "Family",
    description:
      "Dad is originally from Mexico and Mom is originally from Argentina",
    image: argentinamexicopic
  },
	  {
    name: "Big Soccer Family",
    description:
      "Argentina World Champs 2022",
    image: messitaunt
  },
	{name:"Siblings",
	description: "2 older siblings and a sister in law",
	image: familypic
	}
];

const phoenix = 	{
	name: "My Doggo Phoenix",
	description: "",
	image: dogpic
}


const experiences = [
	{
		title: "21",
		description: "Born in Provo Utah but I've traveled a bit",
		image: globe
	},
  {
    title: "Software Engineer",
    description:
      "Currently work as a full stack software engineer for an engineering firm",
    image: codingpic
  },
  {
    title: "Hobbies",
    description:
      "Cars, gym, sleeping",
    image: bed,
  },
	{
		title: "Fun Fact",
		description: "My style was better was I was younger",
		image: pimp
	}
]

export { projects, navLinks, experiences, phoenix };
