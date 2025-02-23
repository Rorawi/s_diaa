import React, { useEffect } from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaCheckCircle, FaMapMarkerAlt,FaTimes } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { LocationSection } from "./ReusableComponents";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const validate = () => {
		let tempErrors = {};
		if (!formData.name) tempErrors.name = "Name is required";
		if (!formData.email) {
			tempErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			tempErrors.email = "Email is invalid";
		}
		if (!formData.message) tempErrors.message = "Message is required";
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;

		if (validate()) {
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					e.target,
					process.env.REACT_APP_EMAILPUBLIC_KEY
				)

				.then(
					(result) => {
						setSuccessMessage("Message sent successfully!");
						setFormData({ name: "", email: "", message: "" });
					},
					(error) => {
						console.log(error.text);
					}
				);

			form.reset();
			formData.name = "";
			formData.email = "";
			formData.message = "";
		}
	};

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setSuccessMessage("");
	// 	}, 4000);
	// 	return () => clearTimeout(timer);
	// }, [successMessage]);

	return (
		<div className="relative" role="main">
			<div className="relative w-full xl:h-[70vh] flex items-center justify-center text-white pt-[100px] pb-[70px]" aria-labelledby="contact-heading">
				{/* Background Image */}
				<div className="absolute inset-0 bg-cover bg-center" aria-hidden="true" />

				{/* Overlay for better text contrast */}
				<div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

				{/* Content */}
				<div className="relative z-10 px-6 md:px-12 lg:text-center gap-6">
					<div className="flex flex-col justify-center lg:items-center gap-4">
						<h1 id="contact-heading" className="text-3xl md:text-6xl font-bold leading-[1.28em]">
							Contact Us
						</h1>
					</div>
				</div>
			</div>

			<div className="container mx-auto mt-20 mb-40">
				<div className="px-6 md:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
						<div className="relative rounded-lg overflow-hidden">
							<div className="absolute inset-0 greenbg-cover bg-center" aria-hidden="true" />
							<div className="relative z-10 px-6 md:px-12 py-8 md:py-10">
								<h2 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
									Get In Touch With Us
								</h2>

								<p className="text-[#dfdfdf] text-[20px] mb-6">
									We are always available to help you with any questions you may have. Please feel free to reach out to us.
								</p>
								<div className="mt-9">
									<div className="flex items-start items-center gap-3 mb-3">
										<div className="bg-white text-[#22719b] flex items-center justify-center w-7 h-7 rounded-full shadow-lg flex-shrink-0" aria-hidden="true">
											<MdPhoneInTalk className="w-5 h-5" />
										</div>

										<div>
											<p className="text-white text-[20px] mb-0 leading-tight">
												+233 599 021 021
											</p>
											<p className="text-white text-[20px] mb-0 leading-tight">
												+233 504 899 266
											</p>
										</div>
									</div>
									<div className="flex items-start items-center gap-3 mb-3">
										<div className="bg-white text-[#22719b] flex items-center justify-center w-7 h-7 rounded-full shadow-lg flex-shrink-0" aria-hidden="true">
											<IoMailOpenOutline className="w-5 h-5" />
										</div>

										<div>
											<p className="text-white text-[20px] mb-0 leading-tight">
												info.sdiaa@gmail.com
											</p>
											<p className="text-white text-[20px] mb-0 leading-tight">
												projects.sdiaa@gmail.com
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							{/* <h2 className="text-[30px] text-[#212121] md:text-4xl font-bold leading-[1.28em] mb-4">
								Kindly Fill The Form Below
							</h2> */}

							<div>
								<form onSubmit={handleSubmit} className="" aria-labelledby="form-heading">
									<h2 id="form-heading" className="sr-only">Contact Form</h2>
									<div className="grid grid-cols-1 gap-6">
										<div>
											<label htmlFor="name" className="text-[20px] mb-2 block">
												Name
											</label>
											<input
												type="text"
												name="name"
												id="name"
												value={formData.name}
												onChange={handleChange}
												className="w-full h-12 px-4 rounded-lg bg-[#f5f5f5] focus:outline-none"
												aria-required="true"
											/>
											{errors.name && (
												<p className="text-red">*{errors.name}</p>
											)}
										</div>
										<div>
											<label htmlFor="email" className="text-[20px] mb-2 block">
												Email
											</label>
											<input
												type="email"
												name="email"
												id="email"
												value={formData.email}
												onChange={handleChange}
												className="w-full h-12 px-4 rounded-lg bg-[#f5f5f5] focus:outline-none"
												aria-required="true"
											/>
											{errors.email && (
												<p className="text-red">*{errors.email}</p>
											)}
										</div>
										<div>
											<label htmlFor="message" className="text-[20px] mb-2 block">
												Message
											</label>
											<textarea
												name="message"
												id="message"
												value={formData.message}
												onChange={handleChange}
												className="w-full h-32 p-4 rounded-lg bg-[#f5f5f5] focus:outline-none"
												aria-required="true"
											></textarea>
											{errors.message && (
												<p className="text-red">*{errors.message}</p>
											)}
										</div>
										<div>
											<button
												type="submit"
												className="btn btn-primary text-white w-full h-12 py-3 rounded-lg cursor-pointer"
											>

												Send Message
											</button>
										</div>
										{successMessage && (
											<div className="fixed inset-0 flex items-center justify-center z-[80]" role="alert" aria-live="assertive">
												{/* Clickable backdrop */}
												<div
													className="fixed inset-0 bg-black/50 bg-opacity-50"
													onClick={() => setSuccessMessage("")}
													aria-hidden="true"
												></div>

												<div className="bg-white p-6 pb-3 rounded-lg shadow-lg max-w-[350px] md:max-w-sm w-full text-center relative z-10">
													<div className="flex justify-end">
														<button
															onClick={() => setSuccessMessage("")}
															className="text-[#333] hover:text-[#000] transition-colors cursor-pointer"
															aria-label="Close success message"
														>
															<FaTimes />
														</button>
													</div>
													<div className="flex justify-center items-center gap-2 mb-4">
														<FaCheckCircle className="text-green-700 text-5xl" />
													</div>
													<p>{successMessage}</p>
													<button
														onClick={() => setSuccessMessage("")}
														className="mt-4 btn btn-primary text-white w-full py-2 rounded-lg cursor-pointer"
													>
														Close
													</button>
												</div>
											</div>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<LocationSection />
		</div>
		
	);
};

export default Contact;
