import React from "react";
import {
	HeroSection,
	ImpactSection,
	SmallAboutUs,
	SmallServices,
	LocationSection,
	Footer,
	SocialPlatform,
	DevelopmentalGoals,
} from "./ReusableComponents";
import TopNav from "./TopNav";
import ServicesSwiper from "./ServiceSwiper";

const Home = () => {
	return (
		<div className="">
			<HeroSection />
			<ImpactSection />
			<SmallAboutUs />
			<SmallServices />
			<ServicesSwiper />
			<LocationSection />
			<DevelopmentalGoals />
			{/* <SocialPlatform /> */}
		</div>
	);
};

export default Home;
