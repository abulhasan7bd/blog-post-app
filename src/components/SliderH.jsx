import React from "react";
import Lottie from "lottie-react";
import lottoImg from "../assets/headerlotti.json";
import { Typewriter } from "react-simple-typewriter";

const SliderH = ({ data }) => {
 
  return (
    <div
      className="h-[50vh] md:h-[80vh] w-full px-[7%] flex flex-col md:flex-row items-center justify-between"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,1.5), rgba(0,0,0,0.5)),url(${data.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text content (top on small, right on large) */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-start h-full text-center md:text-left">
        <h2 className="text-[2rem] md:text-[3.4rem] text-white font-Poppins font-[800] text-center md:text-left md:mx-0 mx-auto   ">
      {data.title}
        </h2>
        <p className="text-white font-Poppins text-[1rem] mt-2">
         {data.subtitle}
        </p>
        <b className="text-white text-center mx-auto text-[1.2rem] md:text-[1.3rem] mt-4 font-[600] font-Lato md:mx-0">
          Daily Blog Posts of
          <span className="ml-2" style={{ color: "#FF9494" }}>
            <Typewriter
              words={[
                "Clean Code",
                "React Magic",
                "Backend Power",
                "MERN Stack",
              ]}
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
      <div className="w-full hidden md:flex md:w-[50%] justify-center items-center mt-6 md:mt-0">
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
