/* eslint-disable @next/next/no-img-element */
import React from "react";
import AnimationTextCharacter from "./global/AnimationTextCharacter";

const Banner: React.FC = () => {
  return (
    <>
      <section id="banner">
        <div
          className='bg-[url(/img/Banner.jpg)] w-full h-screen bg-fixed  md:block hidden lg:bg-center bg-right bg-cover'
          id="banner"
        >
          <div className="flex justify-between items-center h-full">
            <div className="container w-full mx-auto sm:mt-0 mt-36">  
              <div className="flex gap-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a href="https://www.facebook.com/profile.php?id=100064498808687&mibextid=LQQJ4d">
                    <img src="/img/facebook.svg" alt="" />
                  </a>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="250"
                >
                  <a href="https://www.instagram.com/stone._.heart_1/">
                    <img src="/img/instagram.svg" alt="" />
                  </a>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <a href="https://github.com/kashandomore">
                    <img src="/img/github.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="md:mt-6 mt-4 md:w-[75%] w-full">
                <AnimationTextCharacter
                  text="I'm Kashan"
                  delayDuration={0.8}
                  childClassName="text-white text-4xl md:text-6xl leading-none"
                />
                <div
                  className="mt-5"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <p className="sm:text-xl text-lg font-calibreRegular text-secondary text-white">
                    I&apos;m a frontend developer and UX/UI designer, having
                    multiple years of experience in complex frontend development
                    using{" "}
                    <span className="text-secondory font-bold">React</span>,{" "}
                    <span className="text-secondory font-bold">
                      TailwindCSS
                    </span>
                    ,{" "}
                    <span className="text-secondory font-bold">
                      SCSS/CSS3/BEM
                    </span>{" "}
                    and{" "}
                    <span className="text-secondory font-bold">Typescript</span>
                    . Apart from the expertise and experience, I&apos;m always
                    eager to learn and{" "}
                    <span className="text-secondory font-bold">
                      open for challenges
                    </span>
                    .{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='bg-[url(/img/Banner-mob.jpg)] w-full h-screen bg-fixed block md:hidden bg-center bg-cover'
          id="banner"
        >
          <div className="flex justify-between items-center h-full">
            <div className="container w-full mx-auto sm:mt-0 mt-36">
              <div className="flex gap-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <a href="https://www.facebook.com/profile.php?id=100064498808687&mibextid=LQQJ4d">
                    <img src="/img/facebook.svg" alt="" />
                  </a>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="250"
                >
                  <a href="https://www.instagram.com/stone._.heart_1/">
                    <img src="/img/instagram.svg" alt="" />
                  </a>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <a href="https://github.com/kashandomore">
                    <img src="/img/github.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="md:mt-6 mt-4 md:w-[75%] w-full">
                <AnimationTextCharacter
                  text="I'm Kashan"
                  delayDuration={0.8}
                  childClassName="text-white text-4xl md:text-6xl leading-none"
                />
                <div
                  className="mt-5"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <p className="sm:text-xl text-lg font-calibreRegular text-secondary text-white">
                    I&apos;m a frontend developer and UX/UI designer, having
                    multiple years of experience in complex frontend development
                    using{" "}
                    <span className="text-secondory font-bold">React</span>,{" "}
                    <span className="text-secondory font-bold">
                      TailwindCSS
                    </span>
                    ,{" "}
                    <span className="text-secondory font-bold">
                      SCSS/CSS3/BEM
                    </span>{" "}
                    and{" "}
                    <span className="text-secondory font-bold">Typescript</span>
                    . Apart from the expertise and experience, I&apos;m always
                    eager to learn and
                    <span className="text-secondory font-bold">
                      open for challenges
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;


