import React from "react";
import { CeoBiography, SmallAboutUs } from "./ReusableComponents";
import img1 from "../assets/friends-smiling.jpg";
import img2 from "../assets/farmers.jpg";
import img3 from "../assets/happychildwithdisability.jpg";
import {
	FaUsers,
	FaLeaf,
	FaHandsHelping,
	FaBook,
	FaRecycle,
	FaBriefcase,
	FaSeedling,
	FaPeopleCarry,
} from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";

const AboutUs = () => {
	const interventions = [
		{
			img: img1,
			alt: "Group of cheerful friends with facemasks taking a selfie in the park. Image by wirestock on Freepik",
			title: "Advocacy for the Sustainable Development Goals",
			quoteText: "📌 Join us in making a difference—get involved today!",
			description: `	At S-DIAA, we champion a sustainable and equitable world by
									advocating for the United Nations Sustainable Development
									Goals (SDGs). Through education, policy influence, and
									training programs, we empower individuals and organizations to
									actively contribute to achieving these goals`,
			value: [
				{
					icon: <FaBook />,
					topic: "Education",
					desc: "Ensuring access to quality education for all.",
				},
				{
					icon: <FaLeaf />,
					topic: "Climate Action",
					desc: "Promoting urgent measures to combat climate change",
				},
				{
					icon: <FaUsers />,
					topic: "Gender Equality",
					desc: "Empowering women and girls for a balanced society",
				},
				{
					icon: <FaHandsHelping />,
					topic: "Sustainable Environment",
					desc: "Encouraging responsible urban development",
				},
			],
		},
		{
			img: img2,
			alt: (
				<a href="https://www.freepik.com/free-photo/happy-farmers-working-field_1164735.htm">
					Image by jcomp on Freepik
				</a>
			),
			title: "Promoting Climate Change Awareness & Green Jobs",
			quoteText: "🌱 Together, we can create a sustainable future for all!",
			description: `Climate change is a pressing global issue, and we are dedicated to raising awareness and providing sustainable job opportunities in eco-friendly industries.`,
			value: [
				{
					icon: <MdEnergySavingsLeaf />,
					topic: "Renewable Energy",
					desc: "Advocating for solar, wind, and sustainable energy",
				},
				{
					icon: <FaSeedling />,
					topic: "Sustainable Agriculture",
					desc: " Encouraging eco-friendly farming for food security",
				},
				{
					icon: <FaRecycle />,
					topic: "Waste Management ",
					desc: "Promoting recycling, composting, and responsible waste disposal",
				},
			],
		},
		{
			img: img3,
			title: "Empowering Persons with Disabilities (PWDs)",
			quoteText:
				"💡 Let's build a more inclusive world—join our empowerment programs!",
			description: `We strive for a society where persons with disabilities are fully included and have equal opportunities to thrive. Through our  International Persons With Disability Empowerment Conference (INPEWDEC) and training programs, we work to break barriers and build inclusive environments.`,
			value: [
				{
					icon: <FaBook />,
					topic: "Education",
					desc: "Equal learning opportunities for PWDs.",
				},
				{
					icon: <FaBriefcase />,
					topic: "Employment",
					desc: "Advocating for inclusive hiring and green job accessibility",
				},
				{
					icon: <FaPeopleCarry />,
					topic: "Community Development",
					desc: "Creating accessible infrastructure and services",
				},
			],
		},
	];
	return (
		<>
			<div className="relative w-full xl:h-[70vh] flex items-center justify-center text-white pt-[100px] pb-[70px]">
				{/* Background Image */}
				<div className="absolute inset-0 bg-cover bg-center" />

				{/* Overlay for better text contrast */}
				<div className="absolute inset-0 bg-black/50"></div>

				{/* Content */}
				<div className="relative z-10 px-6 md:px-12 lg:text-center  gap-6">
					<div className="flex flex-col justify-center lg:items-center gap-4">
						<h1 className="text-3xl md:text-6xl font-bold leading-[1.28em]">
							About Us
						</h1>
					</div>
				</div>
			</div>
			<CeoBiography />

			<div className="relative flex items-center justify-center text-white pt-[100px] pb-[70px]">
					{/* Background Image */}
					<div className="absolute inset-0 greenbg-cover bg-center" />
					<div className="relative z-10 px-6 md:px-12">
						<div className="container mx-auto">
							<div className="max-w-2xl mx-auto text-center pb-20">
								<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
									Become a Change Maker
								</h1>
								<p className="text-[18px]">
									Join us in creating a sustainable future for all. Together, we
									can make a difference!
								</p>

								<div className="mt-10 flex justify-center gap-4">
									<a
										href="/contact"
										className="btn bg-[#fff] text-[#000] font-semibold hover:text-white transition-colors "
									>
										Get Involved
									</a>
									{/* <a
										href="/donate"
										className="btn bg-[#fff] text-[#000] font-semibold hover:text-white transition-colors "
									>
										Donate
									</a> */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<SmallAboutUs />

			<div>
				<div className="container mx-auto  my-40">
					<div className="px-6 md:px-12">
						<h2 className="text-[#22719b] text-[20px] font-bold">About Us</h2>
						<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-20">
							Our Interventions
						</h1>

						{interventions.map((data, index) => {
							return (
								<div key={data.title}>
									<div
										className={`flex flex-col lg:flex-row ${
											index % 2 === 0 ? "lg:flex-row-reverse" : ""
										} justify-center gap-10 mb-24`}
									>
										<div className="h-auto w-full lg:w-1/2 rounded-2xl overflow-hidden">
											<img
												src={data.img}
												alt={data.alt}
												className="object-cover w-full h-full lg:mx-0 xl:ml-0 xl:mr-auto "
											/>
										</div>

										<div className="w-full lg:w-1/2">
											<h1 className="text-[30px] text-[#212121] md:text-4xl font-bold leading-[1.28em] mb-8">
												{data.title}
											</h1>
											<p className="text-[#555555] text-[14px]">
												{data.description}
											</p>

											<div>
												<div className="mt-9">
													<div className="grid grid-cols-2 gap-3 md:gap-6">
														{data.value.map((value, index) => (
															<div
																key={data.topic}
																className="p-6 shadow-lg w-full flex flex-col justify-evenly items-center text-center rounded-md border border-gray-100 h-[150px]"
																title={value.desc}
															>
																<div className="text-[#22719b] text-4xl mb-2">
																	{value.icon}
																</div>
																<h2 className="font-semibold">{value.topic}</h2>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

		
				{/* <TeamSection /> */}

				<div className="hidden"> 
					<div className="container mx-auto  my-40">
						<div className="px-6 md:px-12">
							<h2 className="text-[#22719b] text-[20px] font-bold">Stories</h2>
							<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
								Our Impact Stories
							</h1>

							<div></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
