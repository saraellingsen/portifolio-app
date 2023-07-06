import React from "react";
import portrett from "../assets/bildeAvMeg.png";
import linkedin from "../assets/LinkedIn_icon.png"

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#405463] text-white">
      <div className="bg-[#F9E4DD]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320" className="pt-0">
        <path fill="#405463" fill-opacity="1" d="M0,32L18.5,26.7C36.9,21,74,11,111,32C147.7,53,185,107,222,112C258.5,117,295,75,332,80C369.2,85,406,139,443,170.7C480,203,517,213,554,202.7C590.8,192,628,160,665,154.7C701.5,149,738,171,775,160C812.3,149,849,107,886,117.3C923.1,128,960,192,997,229.3C1033.8,267,1071,277,1108,277.3C1144.6,277,1182,267,1218,240C1255.4,213,1292,171,1329,149.3C1366.2,128,1403,128,1422,128L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
      </div>
          <div>
            <svg viewBox="0 0 2000 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFBC70" d="M42.6,-40.5C53.1,-32.1,58,-16.1,61.5,3.5C65,23.1,67.2,46.3,56.8,55.6C46.3,64.9,23.1,60.3,0.3,60C-22.5,59.7,-45.1,63.7,-60,54.4C-75,45.1,-82.4,22.5,-81.1,1.2C-79.9,-20.1,-70,-40.1,-55.1,-48.5C-40.1,-56.9,-20.1,-53.6,-2,-51.6C16.1,-49.6,32.1,-48.9,42.6,-40.5Z" transform="translate(100 100)" />
            </svg>
          </div>

        <div>
          <h2 className="text-2xl sm:text-7xl font-bold text-[#FFBC70]">ABoUT ME</h2>
        </div>

            <p>Hi. I´m Sara, nice to meet you.</p>
              <a href="https://www.linkedin.com/in/sara-kolsrud-ellingsen-6b32b9222" >
                  <img src={linkedin}  alt="link" className="h-20 mt-20 ml-56"/>
              </a>

            <p>I am passionate about tech and solving problems with code.</p>

          <div>
          <img src={portrett} alt="Portrett" style={{ width: "350px", height:"100%"}} className="pb-0" />
          </div>

    </div>
  );
};

export default AboutMe;
