/* eslint-disable @next/next/no-img-element */
import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="scroll-m-20">
        <div className="container mx-auto mt-20">
          <h1 className="text-white md:text-5xl text-3xl heading font-light">
            Projects
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-12">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
              className="w-full h-full"
            >
              <img src="/img/project-pic.png" alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-full"
            >
              <img src="/img/project-pic2.png" alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="300"
              className="w-full h-full"
            >
              <img src="/img/project-pic3.png" alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="400"
              className="w-full h-full"
            >
              <img src="/img/project-pic4.png" alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-delay="500"
              className="w-full h-full"
            >
              <img src="/img/project-pic5.png" alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-delay="600"
              className="w-full h-full"
            >
              <img src="/img/project-pic6.png" alt="" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-delay="700"
              className="w-full h-full"
            >
              <img src="/img/project-pic7.png" alt="" />
            </div>
          </div>
          <div className="mt-24 relative">
            <div className="bg-[url(/img/img.png)] bg-cover bg-left w-full h-[300px] rounded-xl"></div>
            <div className="bg-primary opacity-60 flex items-center justify-center w-full absolute top-0 h-[300px]">
              <div className="text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full">
                <div className="flex flex-col items-center">
                  <h1 className="text-secondory text-6xl bold">12</h1>
                  <p className="text-xl mt-1">Client</p>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-secondory text-6xl bold">22</h1>
                  <p className="text-xl mt-1">Projects</p>
                </div>
                <div className="flex flex-col items-center md:mt-0 mt-4">
                  <h1 className="text-secondory text-6xl bold">10</h1>
                  <p className="text-xl mt-1">Awards</p>
                </div>
                <div className="flex flex-col items-center lg:mt-0 mt-4">
                  <h1 className="text-secondory text-6xl bold">2</h1>
                  <p className="text-xl mt-1 text-center">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
