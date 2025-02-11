import React from "react";
import img1 from "../assets/boys-smiling.jpg";
import img2 from "../assets/mission.png";
import img3 from "../assets/earth-globe.png";
import img4 from "../assets/wheelchair.png";
import img5 from "../assets/jobs.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

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
						<a href="#contactUs" className="btn transition">
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
								<div className="flex gap-4 mt-9">
									<div>
										<img src={img2} />
									</div>

									<div>
										<h2 className="text-[#212121] text-[30px] font-bold mb-4 leading-[rem]">
											Mission
										</h2>
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
									<div className="mt-[29px]">
										<svg
											width="25"
											height="25"
											viewBox="0 0 18 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0 9.62275C0.0320847 8.83012 0.390363 8.2499 1.11227 7.93388C1.84487 7.61269 2.54004 7.73702 3.1443 8.25508C4.06406 9.0477 4.96777 9.85587 5.87684 10.6589C6.04796 10.8091 6.21908 10.9645 6.39554 11.1148C6.65757 11.3427 6.88751 11.3323 7.12279 11.0733C9.096 8.91819 11.0639 6.75789 13.0371 4.5976C14.3686 3.13668 15.7054 1.68094 17.037 0.220014C17.2027 0.0386945 17.3952 -0.0493752 17.6412 0.0283334C17.8498 0.0956808 18.0102 0.277001 17.9995 0.494585C17.9941 0.608557 17.946 0.732891 17.8819 0.831322C16.3685 3.19884 14.8552 5.56118 13.3419 7.92352C11.5986 10.6433 9.85534 13.3631 8.11207 16.0881C7.80727 16.5647 7.39551 16.8859 6.81264 16.974C6.15491 17.0776 5.60947 16.8704 5.19237 16.3782C3.69508 14.6116 2.20849 12.8399 0.716557 11.0681C0.433143 10.7469 0.133686 10.4257 0.0534744 9.98539C0.0267372 9.85587 0.0160423 9.73154 0 9.62275Z"
												fill="#3a5ac5"
											></path>
										</svg>{" "}
									</div>

									<div>
										<h2 className="text-[#212121] text-[30px] font-bold mb-4 leading-[rem]">
											Vision
										</h2>
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

								<div className="mt-7">
									<a href="#get-involved" className="btn transition">
										Learn More
										<AiOutlineArrowRight className="text-white w-2.5" />
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
							We are located at Oshie Street, Osu, Accra. close to public
							transportation, schools, and hospitals.
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

export const Footer = () => {
	return (
		<div className="bg-[#0e4461] text-white">
			<div className="container mx-auto pt-12 pb-10">
				<div className="flex flex-col lg:flex-row justify-between  gap-6  px-6 md:px-12">
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
									<FaMapMarkerAlt className="w-4 h-4" />
								</div>
						</div>
					</div>
					<div className="flex justify-between gap-6 lg:w-2/3">
						<div className="w-full">
							<h2 className="text-[20px] font-bold text-nowrap">Quick Links</h2>
							<ul className="mt-4">
								<li className="mb-2">
									<a href="/" className="hover:underline">
										Home
									</a>
								</li>
								<li className="mb-2">
									<a href="/about" className="hover:underline">
										About Us
									</a>
								</li>
								<li className="mb-2">
									<a href="/services" className="hover:underline">
										Services
									</a>
								</li>
								<li className="mb-2">
									<a href="/contact" className="hover:underline">
										Contact Us
									</a>
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
									<a href="mailto:projects.sdiaa@gmail.com">
										projects.sdiaa@gmail.com
									</a>
								</li>
							</ul>
						</div>
						<div className="w-full">
							<h2 className="text-[20px] font-bold">Follow Us</h2>
							<ul className="mt-4">
								<li className="mb-2">
									<a href="/" className="hover:underline">
										Facebook
									</a>
								</li>
								<li className="mb-2">
									<a href="/" className="hover:underline">
										Twitter
									</a>
								</li>
								<li className="mb-2">
									<a href="/" className="hover:underline">
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="border-t border-[#555555] mt-6 pt-6  px-6 md:px-12 flex justify-between items-center flex-col md:flex-row">
					<p>&copy; 2025 All Rights Reserved</p>
					<p>S-DIAA</p>
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

export const TeamSection = () => {
	return <></>;
};
