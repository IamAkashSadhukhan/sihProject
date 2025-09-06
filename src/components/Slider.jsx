import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // import autoplay
import "swiper/css";


const img = [
  "https://aot.edu.in/wp-content/uploads/2025/08/dadadsaasda.jpg",
  "https://aot.edu.in/wp-content/uploads/2025/08/image7.jpg",
];

const Slider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"   // 👈 Make swiper take full height
      >
        {img.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"  // 👈 Stretches correctly now
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Slider;
