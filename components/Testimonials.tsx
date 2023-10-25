/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-white md:text-5xl text-3xl heading font-light">
          Testimonials
        </h1>
      </div>
      <div className="container mx-auto mt-20">
        <Slider {...settings}>
          <div className="h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-secondory flex justify-center items-center w-14 h-16 bg-cut">
                <img src="/img/quote.svg" className="-mt-2" alt="" />
              </div>
              <p className="text-gray-400 mt-4 font-light text-xl w-full sm:w-[60%] text-center">
                Great Developer! Completed the task before the deadline and with
                full professional work. Loved his communication. Will hire him
                again.
              </p>
              <img
                src="/img/sir-pic.jpeg"
                className="w-24 h-24 rounded-full mt-4"
                alt=""
              />
              <p className="text-white font-medium text-xl mt-3">
                Maratib Ali Khan
              </p>
              <p className="text-gray-400">Fullstack Developer</p>
            </div>
          </div>
          {/*  */}
          <div className="h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-secondory flex justify-center items-center w-14 h-16 bg-cut">
                <img src="/img/quote.svg" className="-mt-2" alt="" />
              </div>
              <p className="text-gray-400 mt-4 font-light text-xl w-full sm:w-[60%] text-center">
                Great Developer! Completed the task before the deadline and with
                full professional work. Loved his communication. Will hire him
                again.
              </p>
              <img
                src="/img/testimonials-pic.jpeg"
                className="w-24 h-24 rounded-full mt-4 object-cover"
                alt=""
              />
              <p className="text-white font-medium text-xl mt-3">
                Waleed Ali Khan
              </p>
              <p className="text-gray-400">Senior Frontend Developer</p>
            </div>
          </div>
          {/*  */}
          <div className="h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-secondory flex justify-center items-center w-14 h-16 bg-cut">
                <img src="/img/quote.svg" className="-mt-2" alt="" />
              </div>
              <p className="text-gray-400 mt-4 font-light text-xl w-full sm:w-[60%] text-center">
                Great Developer! Completed the task before the deadline and with
                full professional work. Loved his communication. Will hire him
                again.
              </p>
              <img
                src="/img/testimonials2.jpeg"
                className="w-24 h-24 object-cover rounded-full mt-4"
                alt=""
              />
              <p className="text-white font-medium text-xl mt-3">
                Azeem Yaseen
              </p>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
