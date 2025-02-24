import React from "react";
import {
	HeroSection,
	SmallAboutUs,
	SmallServices,
	LocationSection,
	DevelopmentalGoals,
	ProjectSupporters,
} from "./ReusableComponents";
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
