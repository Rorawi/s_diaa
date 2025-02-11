import React, { useEffect, useState } from "react";
import img1 from "../assets/boys-smiling.jpg";
import img2 from "../assets/mission.png";
import img3 from "../assets/earth-globe.png";
import img4 from "../assets/wheelchair.png";
import img5 from "../assets/jobs.png";
import img6 from "../assets/team-member.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import {
	FaMapMarkerAlt,
	FaRegLightbulb,
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import bulb from "../assets/bulb.png";
import logomap from "../assets/logo-map.png";
import developmentplan from "../assets/development-plan.jpg";
import { Link } from "react-router-dom";

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
					<h1 className="text-3xl md:text-6xl font-bold leading-[1.28em]">
						Empowering Communities, Creating a Sustainable Future
					</h1>
					<p className="mt-4 text-lg md:text-xl max-w-3xl leading-[1.7em] text-[18px] mb-6 lg:mx-auto xl:mx-0">
						We promote the SDGs, biodiversity, and climate awareness through
						community projects that improve lives, create green jobs, and
						empower persons with disabilities.{" "}
					</p>
					<div className="mt-7">
						<a href="#contactUs" className="btn btn-primary transition">
							Get Involved
						</a>
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
		<div className="container mx-auto  my-40">
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
									<div>
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
											We are committed to sustainable development, climate
											action, and inclusion. Through advocacy, education, and
											community-driven initiatives, we work to eradicate
											poverty, create green jobs, and empower persons with
											disabilities. Our mission and vision guide us in building
											a better, more inclusive future for all.
										</p>
									</div>
								</div>
								<div className="flex gap-4 mt-9">
									<div>
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
											We are committed to sustainable development, climate
											action, and inclusion. Through advocacy, education, and
											community-driven initiatives, we work to eradicate
											poverty, create green jobs, and empower persons with
											disabilities. Our mission and vision guide us in building
											a better, more inclusive future for all.
										</p>
									</div>
								</div>

								<div className={`mt-7 ${isTrue ? "hidden" : "block"}`}>
									<a href="#get-involved" className="btn btn-primary transition">
										Learn More
										<FiArrowUpRight className="text-white" />
									</a>
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
						<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
							Driving Impact Through Action
						</h1>
						<p className="text-[18px]">
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
							We are located at Oshie Street, Osu, Accra.
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
									Oshie Street, Osu, Accra
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
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.072293815058!2d-0.17482242601641756!3d5.556302394424129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9071561ce523%3A0xc1512b1ebe285c57!2sOshie%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1739226894107!5m2!1sen!2sgh"
							title="map"
							height={450}
							style={{ border: 0 }}
							allowfullscreen=""
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
		<div className="container mx-auto my-40">
			<div className="px-6 md:px-12">
				<h2 className="text-[#22719b] text-[20px] font-bold">Our Goals</h2>
				<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
					Our Sustainable Development Goals
				</h1>
				<img
					src={developmentplan}
					alt=""
					className="w-full h-full"
					height={400}
				/>
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
								<Link to="/">
									<FaLinkedin className="w-4 h-4" />
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
								<li className="mb-2">
									<Link to="/services" className="hover:underline">
										Services
									</Link>
								</li>
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
						<div className="w-full">
							<h2 className="text-[20px] font-bold">Our Patners</h2>
							<ul className="mt-4">
								<li className="mb-2">
									<a href="tel:+0599021021" className="hover:underline">
										+233 599 021 021
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
		<div className="container mx-auto  my-40">
			<div className="px-6 md:px-12">
				<h2 className="text-[#22719b] text-[20px] font-bold">Team mates</h2>
				<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
					Meet Our Team
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{teamMembers.map((data, index) => {
						return (
							<div>
								
								<div className="relative w-full max-w-sm h-[300px] overflow-hidden rounded-lg group">
									{/* Background Image */}
									<img
										src={data.img}
										alt={data.alt}
										className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-black/55 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end items-center p-4">
										{/* Social Icons */}
										<div className="flex flex-col space-y-4 text-white">
											{data.socials.map((social, index) => {
												return (
													<a
												href={social.link}
												target="_blank"
												rel="noopener noreferrer"
												className="cursor-pointer"
											>
												<div className="text-2xl hover:text-[#ffbc8f] transition-colors mb-4" >
												{social.icon}
												</div>
											</a>
												)
											})}
										</div>
									</div>
								</div>
								<h2 className="text-[#212121] text-[20px] font-bold mt-4">
									{data.title}
								</h2>
								<p className="text-[#555555] text-[14px] whitespace-pre-line">{data.job}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export const SocialPlatform = () => {
	return (
		<div className="container mx-auto my-40">
			<div className="px-6 md:px-12"></div>
		</div>
	);
};
