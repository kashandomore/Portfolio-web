import React from "react";

const Skills: React.FC = () => {
  return (
    <>
      <section id="skills" className="scroll-m-24">
        <div className="flex flex-col items-center justify-center mt-36">
          <h1 className="text-white md:text-5xl text-3xl heading font-light">
            My Skills
          </h1>
        </div>
        <div className="container mx-auto mt-12">
          <div className="w-full flex md:gap-20 md:flex-row flex-col">
            <div className="md:w-[50%] w-full">
              {/*  */}
              <div>
                <div className="flex justify-between text-white">
                  <p className="text-white">HTML</p>
                  <p>95%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                    className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[95%] h-2"
                  ></div>
                </div>
              </div>
              {/*  */}
              <div className="mt-6">
                <div className="flex justify-between text-white">
                  <p className="text-white">CSS3/SCSS</p>
                  <p>97%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[97%] h-2"></div>
                </div>
              </div>
              {/*  */}
              <div className="mt-6">
                <div className="flex justify-between text-white">
                  <p className="text-white">TailwindCss</p>
                  <p>85%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[85%] h-2"></div>
                </div>
              </div>
              {/*  */}
              <div className="mt-6">
                <div className="flex justify-between text-white">
                  <p className="text-white">ReactJs</p>
                  <p>92%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[92%] h-2"></div>
                </div>
              </div>
              {/*  */}
              <div className="mt-6">
                <div className="flex justify-between text-white">
                  <p className="text-white">NextJS</p>
                  <p>90%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[90%] h-2"></div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="md:w-[50%] w-full">
              <div className="w-full">
                {/*  */}
                <div className="mt-0 md:mr">
                  <div className="flex justify-between text-white">
                    <p className="text-white">VueJS</p>
                    <p>82%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[82%] h-2"></div>
                  </div>
                </div>
                {/*  */}
                <div className="mt-6">
                  <div className="flex justify-between text-white">
                    <p className="text-white">NuxtJS</p>
                    <p>82%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[82%] h-2"></div>
                  </div>
                </div>
                {/*  */}
                <div className="mt-6">
                  <div className="flex justify-between text-white">
                    <p className="text-white">JavaScript</p>
                    <p>85%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[85%] h-2"></div>
                  </div>
                </div>
                {/*  */}
                <div className="mt-6">
                  <div className="flex justify-between text-white">
                    <p className="text-white">Typescript</p>
                    <p>78%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[78%] h-2"></div>
                  </div>
                </div>
                {/*  */}
                <div className="mt-6">
                  <div className="flex justify-between text-white">
                    <p className="text-white">GraphQL</p>
                    <p>80%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div className="bg-secondory text-xs font-medium text-blue-100 text-center leading-none rounded-l-full w-[80%] h-2"></div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
