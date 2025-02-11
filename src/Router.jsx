import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import TopNav from "./components/TopNav";
import { Footer } from "./components/ReusableComponents";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./components/Service";

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<TopNav />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Router;
