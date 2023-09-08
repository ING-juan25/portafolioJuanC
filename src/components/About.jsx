import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-green-400">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hola, soy Juan Carcamo. Como desarrollador de software con
                experiencia en HTML, CSS, JavaScript y React, me apasiona la
                creación de soluciones digitales innovadoras. Además de ser un
                apasionado del mundo del desarrollo, también soy un entusiasta
                entrenador, y me encanta compartir mis conocimientos con otros.
                Mi enfoque en el desarrollo web me ha permitido crear sitios web
                atractivos y funcionales, mientras que mi experiencia en React
                me ha ayudado a construir aplicaciones web interactivas y de
                alto rendimiento. Cuando no estoy codificando o enseñando,
                disfruto explorar nuevas tecnologías, resolver desafíos
                complejos y colaborar en proyectos emocionantes.
              </p>

              <br />
              <a href="./src/assets/CV.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-green-400 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
