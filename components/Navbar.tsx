/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-[#010212] z-[9999999999] sticky top-0 w-full">
      <div className="flex justify-between container mx-auto items-center h-20 text-white ">
        <div className="cursor-pointer">
          <img
            data-aos="fade-down"
            data-aos-duration="500"
            src="/img/Logo.svg"
            className="w-20 h-20"
            alt=""
          />
        </div>
        <div className="md:block hidden">
          <div className="flex flex-wrap gap-12">
            <p
              data-aos="fade-down"
              data-aos-duration="500"
              className="line-hover"
            >
              <a href="#banner">Home</a>
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              className="line-hover"
            >
              <a href="#services">Services</a>
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className="line-hover"
            >
              <a href="#about">About Me</a>
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="2000"
              className="line-hover"
            >
              <a href="#skills">Skills</a>
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="2500"
              className="line-hover"
            >
              <a href="#projects">Projects</a>
            </p>
            <p
              data-aos="fade-down"
              data-aos-duration="3000"
              className="line-hover"
            >
              <a href="#contact">Contact</a>
            </p>
          </div>
        </div>
        <div className="md:hidden block">
          <img src="/img/menu.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
