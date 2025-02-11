import React from "react";
import {
	HeroSection,
	ImpactSection,
	SmallAboutUs,
	SmallServices,
	LocationSection,
	Footer,
	SocialPlatform,
} from "./ReusableComponents";
import TopNav from "./TopNav";
import ServicesSwiper from "./ServiceSwiper";

const Home = () => {
	return (
		<div className="">
			<TopNav />
			<HeroSection />
			<ImpactSection />
			<SmallAboutUs />
			<SmallServices />
			<ServicesSwiper />
			<LocationSection />
			<Footer />
			{/* <SocialPlatform /> */}
		</div>
	);
};

export default Home;
