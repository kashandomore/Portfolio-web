/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <section id="services" className="scroll-m-24">
        <div className="flex justify-center mt-12">
          <h1 className="text-white md:text-5xl cursor-pointer text-3xl heading font-light">
            My Services
          </h1>
        </div>
        <div className="container mx-auto grid gap-12 mt-24 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="500"
            className="text-white"
          >
            <img src="/img/laptop.svg" alt="" />
            <p className="mt-8 text-2xl font-medium">Unique Design</p>
            <p className="mt-2 text-gray-500">
              Always provide unique solutions and designs for your business and
              project
            </p>
            <div className="bg-secondory w-10 h-1 rounded-full mt-6"></div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="text-white"
          >
            <img src="/img/maximiz.svg" alt="" />
            <p className="mt-8 text-2xl font-medium">Different Layouts</p>
            <p className="mt-2 text-gray-500">
              Give different layouts to simplify and make your application
              better
            </p>
            <div className="bg-secondory w-10 h-1 rounded-full mt-6"></div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="text-white"
          >
            <img src="/img/code.svg" alt="" />
            <p className="mt-8 text-2xl font-medium">Make it simple</p>
            <p className="mt-2 text-gray-500">
              Make it as simple as possible to clerify you what`&apos;`s going
              on periodically.
            </p>
            <div className="bg-secondory w-10 h-1 rounded-full mt-6"></div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            className="text-white mt-8"
          >
            <img src="/img/mob.svg" alt="" />
            <p className="mt-8 text-2xl font-medium">Responsiveness</p>
            <p className="mt-2 text-gray-500">
              Making your websites/web-app responsive on all devices out their!
            </p>
            <div className="bg-secondory w-10 h-1 rounded-full mt-6"></div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="2500"
            className="text-white mt-8"
          >
            <img src="/img/search.svg" alt="" />
            <p className="mt-8 text-2xl font-medium">Quality Assurance</p>
            <p className="mt-2 text-gray-500">
              Testing and assuring your application completely without any flaw
              or bug
            </p>
            <div className="bg-secondory w-10 h-1 rounded-full mt-6"></div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            className="text-white mt-8"
          >
            <img src="/img/Clock.svg" alt="" />
            <p className="mt-8 text-2xl font-medium">24/7 response</p>
            <p className="mt-2 text-gray-500">
              Responding to you within minutes in order to do better
              communication and getting things done quickly
            </p>
            <div className="bg-secondory w-10 h-1 rounded-full mt-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
