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
	ProjectSupporters,
} from "./ReusableComponents";
import TopNav from "./TopNav";
import ServicesSwiper from "./ServiceSwiper";

const Home = () => {
	return (
		<div className="">
			<HeroSection />
			<DevelopmentalGoals />
			{/* <ImpactSection /> */}
			<SmallAboutUs />
			<SmallServices />
			<ServicesSwiper />
			<ProjectSupporters />
			<LocationSection />
			{/* <DevelopmentalGoals /> */}
			{/* <SocialPlatform /> */}
		</div>
	);
};

export default Home;
