"use client";
import Image from "next/image";
import React, { useState } from "react";
import data from "../../public/shared/data.json";
import { RxDotFilled } from "react-icons/rx";
import SubHeader from "../SubHeader";

function Crew() {
  const [selectedcrew, setSelectedCrew] = useState(0);

  const handleClick = (index) => {
    setSelectedCrew(index);
  };

  return (
    <article className="mx-4 text-center md:mx-0 md:text-left">
      <SubHeader code={"02"} text={"meet your crew"} />

      <div
        key={data.crew[selectedcrew].name}
        className="md:grid md:h-full xl:mt-[154px] xl:grid xl:grid-cols-2 "
      >
        <div
          className="mx-auto w-5/6 border-b border-b-white border-opacity-25 
         md:row-start-2 md:grid md:justify-items-center md:border-none xl:col-start-2"
        >
          <Image
            src={data.crew[selectedcrew].images.webp}
            alt="user profile picture"
            width={0}
            height={0}
            unoptimized
            className="mx-auto mt-8 h-[222px] w-auto md:absolute md:bottom-0 md:h-3/6 md:w-auto xl:h-5/6 "
          />
        </div>

        <div className="grid place-items-center backdrop-blur-sm md:row-start-1 md:mt-8 md:h-[240px] xl:col-start-1 xl:ml-40 xl:h-5/6 xl:place-items-start">
          <div className="my-3 grid grid-flow-col md:row-start-2 md:mt-8 xl:mt-28 ">
            {data.crew.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer text-3xl text-white "
                onClick={() => handleClick(index)}
              >
                <div
                  className={` xl:hover:text-white/50  
                ${index === selectedcrew ? "text-white " : "text-white/10"} `}
                >
                  <RxDotFilled />
                </div>
              </div>
            ))}
          </div>

          {/* shows crew information */}
          <div className="text-center xl:text-left ">
            <h2 className="pb-2 font-titleFont text-base uppercase  text-menuColor/25 md:text-2xl xl:mb-4 xl:text-[32px]">
              {data.crew[selectedcrew].role}
            </h2>

            <h1 className="pb-4 font-titleFont text-2xl uppercase text-white md:text-[40px] xl:mb-6 xl:w-auto xl:whitespace-nowrap xl:text-[56px]	">
              {data.crew[selectedcrew].name}
            </h1>
            <p className="h-36 pt-4 font-paragraphFont text-[15px] text-menuColor md:mb-4 md:h-28 md:w-[460px] md:pt-0 md:text-lg">
              {data.crew[selectedcrew].bio}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Crew;
