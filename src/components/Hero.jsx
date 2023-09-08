import React from "react";
import hero from "../assets/images/home.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const social_media = ["logo-linkedin", "logo-twitter", "logo-github"];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-green-400 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Juan Carcamo</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-green-400">
            <TypeAnimation
              sequence={["Fullstack", 3000, "Developer", 3000]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1.5em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
