import React from 'react'
import { SmallServices } from './ReusableComponents';
import ServicesSwiper from './ServiceSwiper';

const Service = () => {
  return (
    <div>
        	<div className="relative w-full xl:h-[70vh] flex items-center justify-center text-white pt-[100px] pb-[70px]">
				{/* Background Image */}
				<div className="absolute inset-0 bg-cover bg-center" />

				{/* Overlay for better text contrast */}
				<div className="absolute inset-0 bg-black/50"></div>

				{/* Content */}
				<div className="relative z-10 px-6 md:px-12 lg:text-center  gap-6">
					<div className="flex flex-col justify-center lg:items-center gap-4">
						<h1 className="text-3xl md:text-6xl font-bold leading-[1.28em]">
							Our Services
						</h1>
					</div>
				</div>
			</div>


            <SmallServices />
            <ServicesSwiper />
    </div>
  )
}

export default Service