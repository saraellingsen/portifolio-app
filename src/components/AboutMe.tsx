import React from "react";
import portrett from "../assets/Portrett.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="sm:text-left pb-8 pl-4 sticky top-20">
            <p className="text-4xl font-bold inline border-b-4 px-20 border-gray-700">
              About
            </p>
          </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Sara, nice to meet you.</p>
          </div>
          <div>
            <p>I am passionate about tech and solving problems with code.</p>
          </div>
          <div>
          <img src={portrett} alt="Portrett" style={{ width: "300px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
