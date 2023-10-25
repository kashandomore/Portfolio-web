import React from "react";

type Props = {
  title?: string;
};

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-8 w-full">
          <h1 className="font-semibold lg:text-[40px] md:text-[35px] text-[30px] text-white">{title}</h1>
         <div className="flex flex-wrap w-full">
         <div className="flex justify-between items-center">
         <div className="w-[35%] rounded-full h-1 bg-gray-300"></div>
         <div className="w-[20%]">
          {/* <img src="/img/cross.svg" alt="" /> */}
         </div>
         <div className="w-[35%] h-1 bg-gray-300 rounded-full"></div>
         </div>
         </div>
      </div>
    </>
  );
};

export default SectionTitle;