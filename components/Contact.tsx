/* eslint-disable @next/next/no-img-element */
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact">
        <div>
          <div className="bg-[url(/img/contact.png)] bg-left object-cover bg-no-repeat w-full h-screen mt-24 flex items-center md:justify-end justify-center">
            <div className="md:px-40 px-6">
              <div className="mb-20">
                <h1 className="text-white md:text-5xl cursor-pointer text-3xl heading font-light mt-36">
                  Get In Touch
                </h1>
              </div>
              <div>
                <div>
                  <div className="mb-6">
                    <h3 className="text-white">Send Me a Message</h3>
                  </div>
                  <form className="w-full">
                    <div className="relative z-0">
                      <input
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-[250px] md:w-[600px] text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-secondory focus:outline-none focus:ring-0 focus:border-secondory peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondory peer-focus:dark:text-secondory peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name*
                      </label>
                    </div>
                    <div className="relative z-0 mt-6">
                      <input
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-[250px] md:w-[600px] text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-secondory focus:outline-none focus:ring-0 focus:border-secondory peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondory peer-focus:dark:text-secondory peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email*
                      </label>
                    </div>
                    <div className="relative z-0 mt-6">
                      <input
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-[250px] sm:w-[600px] text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-secondory focus:outline-none focus:ring-0 focus:border-secondory peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondory peer-focus:dark:text-secondory peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Contact No.
                      </label>
                    </div>
                    <div className="relative z-0 mt-6">
                      <textarea
                        rows={4}
                        id="floating_standard"
                        className="block py-2.5 px-0 w-[250px] md:w-[600px] text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-secondory focus:outline-none focus:ring-0 focus:border-secondory peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondory peer-focus:dark:text-secondory peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Message
                      </label>
                    </div>
                  </form>
                  <div className="flex justify-end">
                    <button className="border-2 hover:border-secondory hover:bg-secondory w-36 h-12 mt-8 text-white rounded-xl duration-500">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
