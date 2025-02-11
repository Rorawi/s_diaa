import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaGlobe, FaUsers, FaLeaf, FaHandsHelping, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const services = [
  { title: "SDG Advocacy", description: "Promoting the UN Sustainable Development Goals through education and partnerships.", icon: <FaGlobe /> },
  { title: "Empowering PWDs", description: "Providing training, accessibility solutions, and employment support.", icon: <FaUsers /> },
  { title: "Climate Action", description: "Supporting renewable energy, eco-businesses, and green job opportunities.", icon: <FaLeaf /> },
  { title: "Community Development", description: "Strengthening grassroots initiatives and promoting environmental sustainability.", icon: <FaHandsHelping /> },
  { title: "Education & Capacity Building", description: "Offering mentorship and training for sustainable impact.", icon: <FaBook /> }
];

const ServicesSwiper = () => {
  return (
    <section className="-mt-70 pb-10 bg-gray-100">
      <div className="container mx-auto px-5 text-center">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          navigation={false}
          className="w-full h-[450px]"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-6 shadow-lg w-full flex flex-col justify-evenly items-center text-center rounded-md  h-[400px]">
                {/* Icon at the top */}
                <div className="text-[#22719b] text-6xl mb-2">{service.icon}</div>
                
                <div>
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mt-2 mb-3">{service.description}</p>
                </div>

                {/* Button */}

                <Link to="/services" className="flex items-center">
                <span>Learn More</span>
                  <AiOutlineArrowRight className="text-black ml-1" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSwiper;
