import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { LocationSection } from "./ReusableComponents";


const Contact = () => {
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
							Contact Us
						</h1>
					</div>
				</div>
			</div>

			<div className="container mx-auto mt-20 mb-40">
				<div className="px-6 md:px-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
					<div className="relative rounded-lg overflow-hidden">
						<div className="absolute inset-0 greenbg-cover bg-center" />
						<div className="relative z-10 px-6 md:px-12 py-8 md:py-10">
							<h1 className="text-[30px] text-[#212121] md:text-5xl font-bold leading-[1.28em] mb-4">
								Get In Touch With Us
							</h1>

                            <p className="text-[#dfdfdf] text-[20px] mb-6">
                                We are always available to help you with any questions you may have. Please feel free to reach out to us.
                            </p>
							<div className="mt-9">
								<div className="flex items-start items-center gap-3 mb-3">
									<div className="bg-white text-[#22719b] flex items-center justify-center w-7 h-7 rounded-full shadow-lg flex-shrink-0">
                                    <MdPhoneInTalk className="w-5 h-5" />
									</div>

                                    <div>
									<p className="text-white text-[20px] mb-0 leading-tight">+233 599 021 021</p>
									<p className="text-white text-[20px] mb-0 leading-tight">+233 504 899 266</p>
                                    </div>
								</div>
								<div className="flex items-start items-center gap-3 mb-3">
									<div className="bg-white text-[#22719b] flex items-center justify-center w-7 h-7 rounded-full shadow-lg flex-shrink-0">
                                    <IoMailOpenOutline className="w-5 h-5" />
									</div>

                                    <div>
									<p className="text-white text-[20px] mb-0 leading-tight">info.sdiaa@gmail.com</p>
									<p className="text-white text-[20px] mb-0 leading-tight">projects.sdiaa@gmail.com</p>
                                    </div>
								</div>
							</div>
						</div>
					</div>
                    <div>
							{/* <h1 className="text-[30px] text-[#212121] md:text-4xl font-bold leading-[1.28em] mb-4">
								Kindly Fill The Form Below
							</h1> */}

                            <div>
                                <form action="#" method="POST" className="">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div>
                                            <label htmlFor="name" className="text-[20px] mb-2 block">Name</label>
                                            <input type="text" name="name" id="name" className="w-full h-12 px-4 rounded-lg bg-[#f5f5f5] focus:outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-[20px] mb-2 block">Email</label>
                                            <input type="email" name="email" id="email" className="w-full h-12 px-4 rounded-lg bg-[#f5f5f5] focus:outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="text-[20px] mb-2 block">Message</label>
                                            <textarea name="message" id="message" className="w-full h-32 px-4 rounded-lg bg-[#f5f5f5] focus:outline-none"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary text-white w-full h-12 py-3 rounded-lg">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                    </div>
				</div>
			</div>

            <LocationSection />
		</>
	);
};

export default Contact;
