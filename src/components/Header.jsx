import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import SliderH from "./SliderH";
const Header = () => {
  const data = [
    {
      title: "Master the MERN Stack",
      subtitle:
        "Build full-stack apps with MongoDB, Express, React, and Node — all in one place.",
        img:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?ga=GA1.1.1654038661.1749058011&semt=ais_hybrid&w=740"
    },
    {
      title: "Code Smart, Not Hard",
      subtitle:
        "Daily tips and tricks to write clean, efficient, and scalable JavaScript code.",
        img:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?ga=GA1.1.1654038661.1749058011&semt=ais_hybrid&w=740"
    },
    {
      title: "React Beyond Basics",
      subtitle:
        "Level up with advanced React patterns, hooks, and state management strategies.",
        img:"https://img.freepik.com/premium-photo/web-development-coding-programming-site-application-laptop-programming-languages_272306-19.jpg?ga=GA1.1.1654038661.1749058011&semt=ais_hybrid&w=740"
    },
  ];

  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper py-[6rem]"
      >
        {data.map((item, id) => {
          return (
            <SwiperSlide>
              <SliderH data={item} key={id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Header;
