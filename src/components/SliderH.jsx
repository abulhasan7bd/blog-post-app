import React from "react";
import Lottie from "lottie-react";
import lottoImg from "../assets/headerlotti.json";
import { Typewriter } from "react-simple-typewriter";

const SliderH = () => {
  return (
<div
  className="h-[90vh] w-full px-[2%] flex flex-col md:flex-row items-center justify-between"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(https://img.freepik.com/free-vector/explorer_23-2148142751.jpg?ga=GA1.1.1654038661.1749058011&semt=ais_items_boosted&w=740)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
 

  {/* Text content (top on small, right on large) */}
  <div className="w-full md:w-[50%] flex flex-col justify-center items-start h-full text-center md:text-left">
    <h2 className="text-[2.5rem] md:text-[4rem] text-white font-Poppins font-[800] text-center md:text-left md:mx-0 mx-auto">
      The Dev Journal
    </h2>
    <p className="text-white font-Poppins text-[1rem] mt-2">
      Explore the world of web development — from front-end design to back-end logic.
      Dive into hands-on tutorials, insightful guides, and real-world developer discussions
      to sharpen your skills and stay ahead in the ever-evolving tech landscape.
    </p>
    <b className="text-white text-center mx-auto text-[1.2rem] md:text-[1.3rem] mt-4 font-[600] font-Lato md:mx-0">
      Daily Blog Posts of
      <span className="ml-2" style={{ color: "#FF9494" }}>
        <Typewriter
          words={["Clean Code", "React Magic", "Backend Power", "MERN Stack"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </b>
  </div>
   {/* Lottie (left side on large, below text on small) */}
  <div className="w-full md:w-[50%] flex justify-center items-center mt-6 md:mt-0">
    <Lottie
      animationData={lottoImg}
      loop={true}
      className="w-full max-w-[400px] md:max-w-[630px]"
    />
  </div>
</div>

  );
};

export default SliderH;
