import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import gmailIcon from "../assets/gmail.svg";
import { navLinks } from "../data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
	const [active, setActive] = useState("intro");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const sections = document.querySelectorAll("div[id]");
		const observer = new IntersectionObserver(
			(entries) => {
				// Find the section that is most visible
				const visibleSection = entries.reduce((max, entry) => {
					return (entry.intersectionRatio > (max?.intersectionRatio || 0))
						? entry
						: max;
				}, null);

				if (visibleSection?.isIntersecting && visibleSection.intersectionRatio > 0.5) {
					const newActive = visibleSection.target.id;
					if (newActive !== active) {
						setActive(newActive);
					}
				}
			},
			{
				threshold: 0.5,
				rootMargin: '0px'
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
			observer.disconnect();
		};
	}, [active]);

	const handleEmailCopy = () => {
		navigator.clipboard.writeText("evanvcortez@example.com");
		toast.success("Email address copied to clipboard!");
	};

	return (
		<nav
			className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40"
		>
			<div className='w-full flex justify-between items-start mx-auto relative'>
				<Link
					to='/'
					className='flex items-start'
					onClick={() => {
						setActive("intro");
						window.scrollTo(0, 0);
					}}
				>
					<p className='text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex'>
						EC
					</p>
				</Link>

				{/* Icons Container */}
				<div className='absolute left-0 top-20 flex flex-col items-start gap-4'>
					<button onClick={handleEmailCopy}>
						<img src={gmailIcon} alt='Gmail' className='w-6 h-6 object-contain cursor-pointer' />
					</button>
				</div>

				<ul className='list-none hidden sm:flex flex-col gap-5'>
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`relative flex items-center ${active === nav.id ? "text-white" : "text-slate-500"
								} hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
							onClick={() => setActive(nav.id)}
						>
							{active === nav.id && (
								<div className="fixed right-10 w-2 h-6 lg:h-8 bg-accent"></div>
							)}
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${!toggle ? "hidden" : "flex"
							} p-3 absolute top-16 right-0 mx-2 my-1 min-w-[120px] z-30 rounded-xl bg-black/80 backdrop-blur-sm`}
					>
						<ul className='list-none flex justify-end items-start flex-1 flex-col gap-2'>
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[14px] ${active === nav.id ? "text-white" : "text-slate-400"
										} hover:text-white transition-colors px-2 py-1 w-full text-right`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.id);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<ToastContainer position="bottom-left" />
		</nav>
	);
};

export default Navbar;
