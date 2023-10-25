/* eslint-disable @next/next/no-img-element */
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="scroll-m-24">
        <div className="flex justify-center mt-28">
          <h1 className="text-white md:text-5xl text-3xl heading font-light">
            About Me
          </h1>
        </div>
        <div className="mt-12 w-full container mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <img src="/img/about-img.png" alt="" />
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="md:w-1/2 w-full flex justify-center items-center"
          >
            <div>
              <h1 className="text-white text-3xl">Hi There!</h1>
              <p className="mt-2 text-gray-400 tracking-widest">
                I&apos;m an experienced web developer having years of experience
                in VueJS, NuxtJS, NodeJS, HTML5, CSS3/SCSS, Bootstrap,
                Bootstrap, Vue, Tailwind CSS. I&apos;m also a UX/UI designer and
                I&apos;ve designed many eye-catching and attractive website and
                app designs in AdobePS and AdobeXD. I develop Apps which runs on
                both Android and IOS platforms and those applications correspond
                to the platform (Android or IOS) accordingly.
              </p>
              <div className="flex flex-wrap gap-14 mt-6">
                <div className="mt-2 font-bold">
                  <p className="text-secondory">Name:</p>
                  <p className="text-white">Kashan shah</p>
                  <p className="text-secondory mt-4">Phone:</p>
                  <p className="text-white">+923266288466</p>
                </div>
                <div className="sm:mt-2 -mt-10 font-bold">
                  <p className="text-secondory">Email:</p>
                  <p className="text-white">Kashandomore@gmail.com</p>
                  <p className="text-secondory mt-4">Residence:</p>
                  <p className="text-white">Lahore Pakistan</p>
                </div>
              </div>
              <div className="bg-gray-400 w-[100%] h-[1px] mt-6"></div>
              <div className="mt-6">
                <div className="button">
                  <p className="btnText">Contact Me</p>
                  <div className="btnTwo">
                    <p className="btnText2">GO!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full">
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="relative"
          >
            <div className=' bg-[url("/img/web-img.jpeg")] bg-center w-full h-[150px] bg-cover mt-36'></div>
            <div className="bg-primary flex flex-col justify-center items-center opacity-80 w-full h-[150px] absolute top-0">
              <h1 className="text-white text-xl md:text-3xl text-center">
                Let`&apos;`s Work Together On Your Next Project!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
