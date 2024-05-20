import "./../assets/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sliderData from "./../assets/slider.json";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchSliderData();
  }, []);

  const fetchSliderData = () => {
    try {
      setSlides(sliderData.data || []);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };
  return (
    <>
      <div className="w-full mb-10 lg:mb-20 mt h-[30vw]">
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={`Slide ${slide.title}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};
export default Carousel;
