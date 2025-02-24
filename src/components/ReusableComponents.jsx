import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/boys-smiling.jpg";
import img2 from "../assets/mission.png";
import img3 from "../assets/earth-globe.png";
import img4 from "../assets/wheelchair.png";
import img5 from "../assets/jobs.png";
import img6 from "../assets/team-member.jpg";
import ghschool from "../assets/gh-schools.jpg";
import inclusion from "../assets/inclusion.png";
import sedofa from "../assets/sedofa.png";
import sweb from "../assets/sweb.png";
import wfp from "../assets/wfp.png";
import absa from "../assets/absa.png";
import kweku_kakah from "../assets/kweku_kakah.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { GiWorld, GiGraduateCap } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";
import { MdOutlineWc } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { WiSolarEclipse } from "react-icons/wi";
import { PiLinktreeLogoBold } from "react-icons/pi";

import {
	FaMapMarkerAlt,
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import bulb from "../assets/bulb.png";
import logomap from "../assets/logo-map.png";
import { Link } from "react-router-dom";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

export function HeroSection() {
	return (
		<div className="relative w-full xl:h-[100vh] flex items-center justify-center text-white pt-[160px] pb-[70px]">
			{/* Background Image */}
			<div className="absolute inset-0 bg-cover bg-center" />

			{/* Overlay for better text contrast */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<div className="relative z-10 px-6 md:px-12 lg:text-center  gap-6">
				<div className="flex flex-col justify-center lg:items-center gap-4">
					<h1 className="text-3xl md:text-6xl lg:max-w-3xl font-bold leading-[1.28em]">
						Empowering Communities, Creating a Sustainable Future
					</h1>
					<p className="mt-4 text-lg md:text-xl max-w-3xl leading-[1.7em] text-[18px] mb-6 lg:mx-auto xl:mx-0">
						We promote the SDGs, biodiversity, and climate awareness through
						community projects that improve lives, create green jobs, and
						empower persons with disabilities.{" "}
					</p>
					<div className="mt-7">
						<Link to="/contact" className="btn btn-primary transition">
							Get Involved
						</Link>
					</div>
				</div>
			</div>
			{/* <div className="relative z-10 px-6 md:px-12 grid grid-cols-1 place-items-center lg:text-center xl:text-start xl:grid-cols-2  gap-6 hidden">
				<div>
					<h1 className="text-3xl md:text-6xl font-bold leading-[1.28em]">
						Empowering Communities, Creating a Sustainable Future
					</h1>
					<p className="mt-4 text-lg md:text-xl max-w-2xl leading-[1.7em] text-[18px] mb-6 lg:mx-auto xl:mx-0">
						We are committed to promoting sustainable development, biodiversity,
						and climate action while empowering persons with disabilities.
					</p>
					<div className="mt-7">
						<a href="#get-involved" className="btn transition">
							Get Involved
						</a>
					</div>
				</div>
				<div className="relative flex flex-col md:flex-row justify-center items-center gap-4">
					<div className="">
						<img
							src={img1}
							alt=""
							className="object-cover lg:w-66 lg:h-96 mx-auto mt-10 lg:mx-0 xl:mt-0 xl:ml-0 xl:mr-auto "
						/>
					</div>
					<div className="lg:pt-[17%] hidden md:block">
						<img
							src={img2}
							alt=""
							className="object-cover lg:w-66 lg:h-96 mx-auto mt-10 lg:mx-0 xl:mt-0 xl:ml-0 xl:mr-auto"
						/>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export function ImpactSection() {
	return (
		<div className="container mx-auto mt-20 mb-40">
			<div className="px-6 md:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					<div className="">
						<img src={img3} alt="" width={80} height={80} className="mb-4" />
						<h2 className="text-[30px] font-bold mb-4 text-[#212121]">
							Sustainable Development & SDGs
						</h2>
						<p className="text-[#555555] text-[18px]">
							We promote the{" "}
							<span className="font-semibold">
								UN Sustainable Development Goals (SDGs)
							</span>{" "}
							through education, gender equality, and economic empowerment. Our
							advocacy, training, and partnerships drive real-world impact,
							creating a more{" "}
							<span className="font-semibold">
								sustainable and inclusive future.
							</span>
						</p>
					</div>
					<div className="">
						<img src={img4} alt="" width={80} height={80} className="mb-4" />
						<h2 className="text-[30px] font-bold mb-4 text-[#212121]">
							Empowering Persons with Disabilities (PWDs)
						</h2>
						<p className="text-[#555555] text-[18px]">
							We champion{" "}
							<span className="font-semibold">
								inclusion and equal opportunities{" "}
							</span>{" "}
							for PWDs through education, skills training, and employment
							support. Our goal is to build{" "}
							<span className="font-semibold">accessible communities</span>{" "}
							where everyone can thrive.
						</p>
					</div>
					<div className="">
						<img src={img5} alt="" width={80} height={80} className="mb-4" />
						<h2 className="text-[30px] font-bold mb-4 text-[#212121]">
							Climate Action & Green Jobs
						</h2>
						<p className="text-[#555555] text-[18px]">
							We fight climate change by promoting{" "}
							<span className="font-semibold">renewable energy</span>,{" "}
							<span className="font-semibold">sustainable agriculture,</span>{" "}
							and <span className="font-semibold">waste management</span>. Our
							programs create <span className="font-semibold">green jobs,</span>{" "}
							supporting both environmental sustainability and economic growth.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SmallAboutUs() {
	const [isTrue, setIsTrue] = useState(false);

	useEffect(() => {
		if (window.location.pathname === "/about") {
			setIsTrue(true);
		}
	}, [isTrue]);
	return (
		<div>
			<div className="container mx-auto  my-40">
				<div className="px-6 md:px-12">
					<div className="flex flex-col lg:flex-row justify-center gap-10">
						<div className="h-auto w-full lg:w-1/2 rounded-2xl overflow-hidden">
							<img
								src={img1}
								alt=""
								className="object-cover w-full h-full lg:mx-0 xl:ml-0 xl:mr-auto "
							/>
						</div>

						<div className="w-full lg:w-1/2">
							<h2 className="text-[#22719b] text-[20px] font-bold">About Us</h2>
							<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
								Empowering Communities, Driving Change
							</h1>
							<p className="text-[#555555] text-[18px] ">
								We are committed to sustainable development, climate action, and
								inclusion. Through advocacy, education, and community-driven
								initiatives, we work to eradicate poverty, create green jobs,
								and empower persons with disabilities. Our mission and vision
								guide us in building a better, more inclusive future for all.
							</p>

							<div>
								<div className="mt-9">
									<div className="p-4">
										<div className="flex items-center gap-4 mb-4">
											<div>
												<img
													src={img2}
													alt="Mission"
													className="text-[#22719b]"
													width={55}
												/>
											</div>
											<h2 className="text-[#212121] text-[30px] font-bold leading-[rem]">
												Mission
											</h2>
										</div>
										<p className="text-[#555555] text-[18px] ">
											Our mission is to promote sustainable development, climate
											action, and inclusion through advocacy, education, and
											community-driven initiatives.
										</p>
									</div>
								</div>
								<div className="flex gap-4 mt-9">
									<div className="p-4">
										<div className="flex items-center gap-4  mb-4 ">
											<div>
												<img
													src={bulb}
													alt="Mission"
													className="text-[#22719b]"
													width={60}
												/>
											</div>
											<h2 className="text-[#212121] text-[30px] font-bold leading-[rem]">
												Vision
											</h2>
										</div>
										<p className="text-[#555555] text-[18px] ">
											To create a world where the SDGs are fully realized,
											empowering every individual, including PWDs, to lead
											fulfilling, dignified, and inclusive lives. We envision a
											society where equality, sustainability, and accessibility
											are fundamental principles, ensuring no one is left behind
											in the journey towards global development and prosperity.
										</p>
									</div>
								</div>

								<div className={`mt-7 ${isTrue ? "hidden" : "block"}`}>
									<Link
										to="/about"
										className="relative inline-flex items-center group duration-300 btn btn-primary transition"
									>
										<span>Learn More</span>
										<FiArrowUpRight className="ml-1" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export const SmallServices = () => {
	return (
		<div className="relative flex items-center justify-center text-white pt-[100px] pb-[70px]">
			{/* Background Image */}
			<div className="absolute inset-0 greenbg-cover bg-center" />
			<div className="relative z-10 px-6 md:px-12">
				<div className="container mx-auto">
					<div className="max-w-2xl mx-auto text-center pb-20">
						<h2 className="text-[20px] font-bold">Our Services</h2>
						<h1 className="text-[30px] text-[#fff] md:text-5xl font-bold leading-[1.28em] mb-4">
							Driving Impact Through Action
						</h1>
						<p className="text-[18px] text-[#dfdfdf]">
							We focus on sustainable development, climate advocacy, and
							community empowerment. Our services are designed to create
							long-term, meaningful change by supporting individuals,
							organizations, and communities in building a better future.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const LocationSection = () => {
	return (
		<div className="container mx-auto my-40">
			<div className="px-6 md:px-12">
				<div className="flex flex-col lg:flex-row justify-center gap-10">
					<div className="w-full lg:w-1/2">
						<h2 className="text-[#22719b] text-[20px] font-bold">Locate Us</h2>
						<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
							Find Us on the Map
						</h1>
						<p className="text-[#555555] text-[18px] ">
							We are located at Ghana Chamber of Young Entrepreneurs (GCYE)
							building,  Madina Estates.
							<br /> Our office is open
							<span className="font-bold"> Monday</span> to{" "}
							<span className="font-bold"> Friday</span>,{" "}
							<span className="font-bold">9 am</span> to{" "}
							<span className="font-bold">5 pm</span>.<br /> Feel free to visit
							us or contact us for more information about our programs and
							services.
						</p>

						<div className="mt-9">
							<div className="flex items-center gap-3 mb-3">
								<div className="bg-[#22719b] text-white flex items-center justify-center w-7 h-7 rounded-full shadow-lg">
									<FaMapMarkerAlt className="w-5 h-5" />
								</div>

								<p className="text-[20px] mb-0 leading-tight">
									21 Jordan Street, Madina Estates
								</p>
							</div>
							<div className="flex items-center gap-3 mb-3">
								<div className="bg-[#22719b] text-white flex items-center justify-center w-7 h-7 rounded-full shadow-lg">
									<GiWorld className="w-5 h-5" />
								</div>

								<p className="text-[20px] mb-0 leading-tight">Accra, Ghana</p>
							</div>
						</div>
					</div>
					<div className="h-auto w-full lg:w-1/2 rounded-2xl overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3442977243185!2d-0.16503132601540982!3d5.663249694318187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d009938e927%3A0xde313c73ca615fa0!2sGhana%20Chamber%20of%20Young%20Entrepreneurs!5e0!3m2!1sen!2sgh!4v1740172175721!5m2!1sen!2sgh"
							title="map"
							height={450}
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export const DevelopmentalGoals = () => {
	return (
		<div className="container mx-auto mt-20 mb-40">
			<div className="px-6 md:px-12">
				<h2 className="text-[#22719b] text-[20px] font-bold">Our Goals</h2>
				<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
					Our Sustainable Development Goals
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div
						className="relative p-6 shadow-lg bg-[#1fab66] text-white w-full flex flex-col justify-evenly rounded-md border border-gray-100 h-[150px] lg:h-[200px] xxl:h-[150px]"
						title=""
					>
						<div className="absolute inset-0 wavybg-cover bg-center" />
						<div className="relative z-10">
							<WiSolarEclipse className="text-white text-6xl mb-2 flex justify-start" />
							<p className="text-xl font-semibold">Climate Action</p>
						</div>
					</div>
					<div
						className="relative p-6 shadow-lg bg-[#452565] text-white w-full flex flex-col justify-evenly rounded-md border border-gray-100 h-[150px] lg:h-[200px] xxl:h-[150px]"
						title=""
					>
						<div className="absolute inset-0 wavybg-cover bg-center" />
						<div className="relative z-10">
							<HiOutlineBriefcase className="text-white text-6xl mb-2 flex justify-start" />
							<p className="text-xl font-semibold">
								Decent Work & Economic Growth
							</p>
						</div>
					</div>
					<div
						className="relative p-6 shadow-lg bg-[#b7273b] text-white w-full flex flex-col justify-evenly rounded-md border border-gray-100 h-[150px] lg:h-[200px] xxl:h-[150px]"
						title=""
					>
						<div className="absolute inset-0 wavybg-cover bg-center" />
						<div className="relative z-10">
							<GiGraduateCap className="text-white text-6xl mb-2 flex justify-start" />
							<p className="text-xl font-semibold">Quality Education</p>
						</div>
					</div>
					<div
						className="relative p-6 shadow-lg bg-[#cd9703] text-white w-full flex flex-col justify-evenly rounded-md border border-gray-100 h-[150px] lg:h-[200px] xxl:h-[150px]"
						title=""
					>
						<div className="absolute inset-0 wavybg-cover bg-center" />
						<div className="relative z-10">
							<RiCommunityLine className="text-white text-6xl mb-2 flex justify-start" />
							<p className="text-xl font-semibold">
								Sustainable Cities & Communities
							</p>
						</div>
					</div>
					<div
						className="relative p-6 shadow-lg bg-[#f26a2d] text-white w-full flex flex-col justify-evenly rounded-md border border-gray-100 h-[150px] lg:h-[200px] xxl:h-[150px]"
						title=""
					>
						<div className="absolute inset-0 wavybg-cover bg-center" />
						<div className="relative z-10">
							<MdOutlineWc className="text-white text-6xl mb-2 flex justify-start" />
							<p className="text-xl font-semibold">Gender Equality</p>
						</div>
					</div>
					<div
						className="relative p-6 shadow-lg bg-[#22719b] text-white w-full flex flex-col justify-evenly rounded-md border border-gray-100 h-[150px] lg:h-[200px] xxl:h-[150px]"
						title=""
					>
						<div className="absolute inset-0 wavybg-cover bg-center" />
						<div className="relative z-10">
							<GiGraduateCap className="text-white text-6xl mb-2 flex justify-start" />
							<p className="text-xl font-semibold">Quality Education</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Footer = () => {
	return (
		<div className="bg-[#0e4461] text-white">
			<div className="pt-12 pb-10">
				<div className="flex flex-col lg:flex-row justify-between  gap-10  px-6 md:px-12">
					<div className="lg:w-2/3">
						{/* Logo */}
						<a href="/" className="max-w-[150px]">
							<img src={logo} alt="" width={130} height={130} />
						</a>{" "}
						<p className="text-[18px] mt-4">
							We promote the SDGs, biodiversity, and climate awareness through
							community projects that improve lives, create green jobs, and
							empower persons with disabilities.{" "}
						</p>
						<div className="flex gap-4 mt-6">
							<div className="border border-[#fff] text-white flex items-center justify-center w-7 h-7 rounded-full hover:shadow-2xl transition cursor-pointer">
								<Link to="https://web.facebook.com/profile.php?id=61567095417126">
									<FaFacebook className="w-4 h-4" />
								</Link>
							</div>
							<div className="border border-[#fff] text-white flex items-center justify-center w-7 h-7 rounded-full hover:shadow-2xl transition cursor-pointer">
								<Link to="https://www.instagram.com/sdiaa_gh/">
									<FaInstagram className="w-4 h-4" />
								</Link>
							</div>
							<div className="border border-[#fff] text-white flex items-center justify-center w-7 h-7 rounded-full hover:shadow-2xl transition cursor-pointer">
								<Link to="https://www.linkedin.com/company/sustainable-development-in-africa-advocacy-sdiaa/posts/?feedView=all&viewAsMember=true">
									<FaLinkedin className="w-4 h-4" />
								</Link>
							</div>
							<div className="border border-[#fff] text-white flex items-center justify-center w-7 h-7 rounded-full hover:shadow-2xl transition cursor-pointer">
								<Link to="https://linktr.ee/sdiaa">
									<PiLinktreeLogoBold className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-end gap-6 lg:w-2/3">
						<div className="w-full">
							<h2 className="text-[20px] font-bold text-nowrap">Quick Links</h2>
							<ul className="mt-4">
								<li className="mb-2">
									<Link to="/" className="hover:underline">
										Home
									</Link>
								</li>
								<li className="mb-2">
									<Link to="/about" className="hover:underline">
										About Us
									</Link>
								</li>
								{/* <li className="mb-2">
									<Link to="/services" className="hover:underline">
										Services
									</Link>
								</li> */}
								<li className="mb-2">
									<Link to="/contact" className="hover:underline">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						<div className="w-full">
							<h2 className="text-[20px] font-bold">Contact Us</h2>
							<ul className="mt-4">
								<li className="mb-2">
									<a href="tel:+0599021021" className="hover:underline">
										+233 599 021 021
									</a>
								</li>
								<li className="mb-2">
									<a href="tel:+0504899266" className="hover:underline">
										+233 504 899 266
									</a>
								</li>
								<li className="mb-2">
									<a
										href="mailto:info.sdiaa@gmail.com"
										className="hover:underline"
									>
										info.sdiaa@gmail.com
									</a>
								</li>
								<li className="mb-2">
									<a
										href="mailto:projects.sdiaa@gmail.com"
										className="hover:underline"
									>
										projects.sdiaa@gmail.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="border-t border-[#555555] mt-6 pt-6  px-6 md:px-12 flex justify-between items-center flex-col md:flex-row">
					<p>
						<span className="mr-1">
							&copy;
							{new Date().getFullYear()}
						</span>
						<span> All Rights Reserved</span>
					</p>
					<div className="flex gap-1.5 mt-4 md:mt-0">
						<img src={logomap} alt="" width={25} />
						<p>S-DIAA</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const TeamSection = () => {
	const teamMembers = [
		{
			img: img6,
			alt: "Team Member -Kweku Kakah",
			title: "Kweku Kakah",
			job: "Executive Director ,\nLead Gender Equality and Social Inclusion (GESI)",
			socials: [
				{
					icon: <FaFacebook />,
					topic: "Facebook",
					desc: "Follow us on Facebook",
					facebook: "https://web.facebook.com/profile.php?id=61567095417126",
				},
				{
					icon: <FaTwitter />,
					topic: "Twitter",
					desc: "Follow us on Twitter",
					twitter: "https://twitter.com/sdiaa_gh",
				},
				{
					icon: <FaInstagram />,
					topic: "Instagram",
					desc: "Follow us on Instagram",
					instagram: "https://www.instagram.com/sdiaa_gh/",
				},
				{
					icon: <FaLinkedin />,
					topic: "Linkedin",
					desc: "Follow us on Linkedin",
					linkedin: "https://www.linkedin.com/company/sdiaa",
				},
			],
		},
		{
			img: img6,
			alt: "Team Member -Deborah Thomas ",
			title: "Deborah Thomas ",
			job: "Lead, Advocacy and Strategy",
			socials: [
				{
					icon: <FaFacebook />,
					topic: "Facebook",
					desc: "Follow us on Facebook",
					link: "https://web.facebook.com/profile.php?id=61567095417126",
				},
				{
					icon: <FaTwitter />,
					topic: "Twitter",
					desc: "Follow us on Twitter",
					link: "https://twitter.com/sdiaa_gh",
				},
				{
					icon: <FaInstagram />,
					topic: "Instagram",
					desc: "Follow us on Instagram",
					link: "https://www.instagram.com/sdiaa_gh/",
				},
				{
					icon: <FaLinkedin />,
					topic: "Linkedin",
					desc: "Follow us on Linkedin",
					link: "https://www.linkedin.com/company/sdiaa",
				},
			],
		},
		{
			img: img6,
			alt: "Team Member -Benjamin Ofosu Adjei",
			title: "Benjamin Ofosu Adjei",
			job: "Lead, Programs and Events",
			socials: [
				{
					icon: <FaFacebook />,
					topic: "Facebook",
					desc: "Follow us on Facebook",
					link: "https://web.facebook.com/profile.php?id=61567095417126",
				},
				{
					icon: <FaTwitter />,
					topic: "Twitter",
					desc: "Follow us on Twitter",
					link: "https://twitter.com/sdiaa_gh",
				},
				{
					icon: <FaInstagram />,
					topic: "Instagram",
					desc: "Follow us on Instagram",
					link: "https://www.instagram.com/sdiaa_gh/",
				},
				{
					icon: <FaLinkedin />,
					topic: "Linkedin",
					desc: "Follow us on Linkedin",
					link: "https://www.linkedin.com/company/sdiaa",
				},
			],
		},
		{
			img: img6,
			alt: "Team Member -Michael Osei",
			title: "Michael Osei",
			job: "Lead, Administration and Finance",
			socials: [
				{
					icon: <FaFacebook />,
					topic: "Facebook",
					desc: "Follow us on Facebook",
					link: "https://web.facebook.com/profile.php?id=61567095417126",
				},
				{
					icon: <FaTwitter />,
					topic: "Twitter",
					desc: "Follow us on Twitter",
					link: "https://twitter.com/sdiaa_gh",
				},
				{
					icon: <FaInstagram />,
					topic: "Instagram",
					desc: "Follow us on Instagram",
					link: "https://www.instagram.com/sdiaa_gh/",
				},
				{
					icon: <FaLinkedin />,
					topic: "Linkedin",
					desc: "Follow us on Linkedin",
					link: "https://www.linkedin.com/company/sdiaa",
				},
			],
		},
		{
			img: img6,
			alt: "Team Member -Eunice Alu",
			title: "Eunice Alu",
			job: "Lead Sustainability, Monitoring and Learning",
			socials: [
				{
					icon: <FaFacebook />,
					topic: "Facebook",
					desc: "Follow us on Facebook",
					link: "https://web.facebook.com/profile.php?id=61567095417126",
				},
				{
					icon: <FaTwitter />,
					topic: "Twitter",
					desc: "Follow us on Twitter",
					link: "https://twitter.com/sdiaa_gh",
				},
				{
					icon: <FaInstagram />,
					topic: "Instagram",
					desc: "Follow us on Instagram",
					link: "https://www.instagram.com/sdiaa_gh/",
				},
				{
					icon: <FaLinkedin />,
					topic: "Linkedin",
					desc: "Follow us on Linkedin",
					link: "https://www.linkedin.com/company/sdiaa",
				},
			],
		},
	];

	return (
		<div className="container mx-auto my-40">
			<div className="px-6 md:px-12">
				<h2 className="text-[#22719b] text-[20px] font-bold">Team mates</h2>
				<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
					Meet Our Team
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{teamMembers.map((data, index) => {
						return (
							<div key={data.name}>
								<div className="relative w-full max-w-sm h-[300px] overflow-hidden rounded-lg group">
									{/* Background Image */}
									<img
										src={data.img}
										alt={data.alt}
										className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-black/55 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex justify-end items-center p-4">
										{/* Social Icons */}
										<div className="hidden lg:block">
										<div className="flex flex-col space-y-4 text-white">
											{data.socials.map((social, index) => {
												return (
													<div key={social.icon}>
													<a
														href={social.link}
														target="_blank"
														rel="noopener noreferrer"
														className="cursor-pointer"
													>
														<div className="text-2xl hover:text-[#ffbc8f] transition-colors mb-4">
															{social.icon}
														</div>
													</a>
													</div>
												);
											})}
										</div>
										</div>
									</div>
								</div>
								<h2 className="text-[#212121] text-[20px] font-bold mt-4">
									{data.title}
								</h2>
								<p className="text-[#555555] text-[14px] whitespace-pre-line">
									{data.job}
								</p>
								<div className="lg:hidden">
									<div className="flex space-x-4 text-white mt-3">
										{data.socials.map((social, index) => {
											return (
												<div key={social.icon}>
												<a
													href={social.link}
													target="_blank"
													rel="noopener noreferrer"
													className="cursor-pointer mr-4 last:mr-0"
												>
													<div className="text-3xl text-[#156088] transition-colors mb-4">
														{social.icon}
													</div>
												</a>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export const CeoBiography = () => {
	return (
		<div>
			<div className="container mx-auto my-40">
				<div className="px-6 md:px-12">
					<div className="flex flex-col lg:flex-row justify-center gap-10 items-stretch">
						{/* Image Section */}
						<div className="w-full lg:w-1/2 rounded-2xl overflow-hidden flex">
							<img
								src={kweku_kakah}
								alt="Kweku Kakah"
								className="object-cover w-full h-full"
								width="600"
								height="400"
							/>
						</div>
						{/* Biography Section */}
						<div className="w-full lg:w-1/2 flex flex-col justify-between">
							<div>
								<h2 className="text-[#22719b] text-[20px] font-bold">
									Professional Bio
								</h2>
								<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-2">
									Kweku Kakah .PMP
								</h1>
								<h1 className="text-[25px] text-[#a9a9a9] italic leading-[1.28em] mb-4">
									Executive Director
								</h1>
								<p className="text-[#555555] text-[18px] mb-10">
									Kweku Kakah, PMP, is a skilled PR practitioner and Project
									Manager with expertise in executing impactful developmental
									projects. He has worked on global sustainability initiatives
									funded by the EU, SNV International, USAID, the UN, and
									others.
								</p>
								<p className="text-[#555555] text-[18px] mb-10">
									His strengths include strategic communication, stakeholder
									engagement, and mobilizing communities for sustainable change.
									He integrates PR with development goals to drive policy
									influence and measurable outcomes.
								</p>
								<p className="text-[#555555] text-[18px] mb-10">
									Passionate about inclusivity and sustainability, Kweku
									advocates for equitable development and leverages
									communication and project management for lasting impact.
								</p>
							</div>
						</div>{" "}
						{/* End of Biography Section */}
					</div>
				</div>
			</div>
		</div>
	);
};

export const ProjectSupporters = () => {
	const supportersLogo = [
		{
			img: wfp,
			link: "https://www.wfp.org/",
			height: 150,
			width: 150,
			name: "World Food Programme (WFP",
		},
		{
			img: sedofa,
			link: "#",
			height: 200,
			width: 180,
			name: "The Sedofa Consultancy (TSC)",
		},
		{
			img: inclusion,
			link: "https://inclusion-ghana.org/",
			height: 100,
			width: 100,
			name: "Inclusion Ghana",
		},
		{
			img: sweb,
			link: "#",
			height: 65,
			width: 65,
			name: "SWEB Foundation",
		},
		{
			img: absa,
			link: "https://www.absa.africa/",
			height: 150,
			width: 150,
			name: "Absa Bank Ghana",
		},
		{
			img: ghschool,
			link: "https://media.ghschools.online/",
			height: 57,
			width: 57,
			name: "GH Schools",
		},
	];
	return (
		<div className="container mx-auto my-40 overflow-hidden">
			<div className="p-6 md:p-12">
				<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-1 text-center">
					Our <span className="text-[#22719b]">Project</span> Supporters 🎉
				</h1>
				<p className="text-[14px] text-center text-[#555555] lg:mx-auto max-w-3xl mb-6">
					Our projects are made possible by the generous support of our partners
					and sponsors. We are grateful for their contributions to our programs
					and initiatives.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{supportersLogo.map((data, index) => {
						return (
							<div key={data.name}>
								<Link
									to={data.link}
									className="flex flex-col justify-between m-auto items-center bg-[#f6f6f6] rounded-2xl p-4 h-full"
								>
									<img
										src={data.img}
										alt="NCPD"
										className="object-contain"
										width={data.width}
										height={data.height}
									/>

									<h6 className="text-[13px] text-center leading-[1.28em] text-[#555555] font-semibold">
										{data.name}
									</h6>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
