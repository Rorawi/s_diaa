import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // React Icons
import logo from "../assets/logo.png";

const TopNav = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="fixed w-full z-50 transition-all duration-300">
			<nav
				className={`${scrolled ? "bg-white shadow-md" : "bg-transparent"} p-4`}
			>
				<div className="container mx-auto flex justify-between items-center">
					{/* Logo */}
					<a href="/" className="max-w-[150px]">
						<img src={logo} alt="" width={130} height={130} />
					</a>

					{/* Desktop Menu */}

					<ul className="hidden md:flex">
						<li className="mr-6">
							<a
								href="/"
								className={`${
									scrolled ? "text-black" : "text-white"
								} transition inline-flex items-center group relative`}
							>
								Home{" "}
								<span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#96c8f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
							</a>
						</li>
						<li className="mr-6">
							<a
								href="/about"
								className={`${
									scrolled ? "text-black" : "text-white"
								} transition inline-flex items-center group relative`}
							>
								About Us{" "}
								<span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#96c8f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
							</a>
						</li>
						{/* <li className="mr-6">
							<a
								href="/services"
								className={`${
									scrolled ? "text-black" : "text-white"
								} transition`}
							>
								Services
							</a>
						</li> */}
						<li>
							<a
								href="/contact"
								className={`${
									scrolled ? "text-black" : "text-white"
								} transition inline-flex items-center group relative`}
							>
								Contact Us{" "}
								<span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#96c8f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
							</a>
						</li>
					</ul>

					{/* Hamburger Icon */}
					<button
						className={`md:hidden z-50 transition ${
							menuOpen ? "text-black" : "text-white"
						}`}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? (
							<HiOutlineX size={30} className="text-black transition" />
						) : (
							<HiOutlineMenu
								size={30}
								className={`${
									scrolled ? "text-black" : "text-white"
								} transition`}
							/>
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 w-full h-screen bg-white md:hidden transition-all flex flex-col items-center justify-center z-40 ${
					menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			>
				<ul className="flex flex-col items-center space-y-6 text-xl">
					<li>
						<a
							href="/"
							className="text-black"
							onClick={() => setMenuOpen(false)}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/about"
							className="text-black"
							onClick={() => setMenuOpen(false)}
						>
							About Us
						</a>
					</li>

					{/* <li className="">
						<a
							href="/services"
							className="text-black"
							onClick={() => setMenuOpen(false)}
						>
							Services
						</a>
					</li> */}
					<li>
						<a
							href="/contact"
							className="text-black"
							onClick={() => setMenuOpen(false)}
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default TopNav;
