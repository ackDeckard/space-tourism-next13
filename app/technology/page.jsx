"use client";
import Image from "next/image";
import React, { useState } from "react";
import data from "../../public/shared/data.json";
import SubHeader from "../SubHeader";

function Technology() {
  const [selectedvehicle, setSelectedVehicle] = useState(0);

  const handleClick = (index) => {
    setSelectedVehicle(index);
  };

  return (
    <article className=" text-center md:text-left">
      <SubHeader code={"03"} text={"space launch 101"} />
      <div
        key={data.technology[selectedvehicle].name}
        className="xl:grid xl:h-5/6 xl:grid-cols-5 xl:place-items-center"
      >
        {/* Images section */}
        <div className="relative h-[310px] md:mb-14 md:h-[310px] md:w-full xl:col-span-2 xl:col-start-4 xl:row-start-1 xl:mb-0 xl:h-[527px] xl:w-full xl:justify-self-end">
          <Image
            src={data.technology[selectedvehicle].images.landscape}
            width={0}
            height={0}
            unoptimized
            quality={100}
            priority={true}
            className="absolute h-[310px] w-full object-cover object-[center_bottom] xl:hidden portrait:hidden"
            alt="space rocket"
          />
          <Image
            src={data.technology[selectedvehicle].images.portrait}
            width={0}
            height={0}
            unoptimized
            quality={100}
            priority={true}
            className={`absolute h-[310px] w-full object-cover md:object-bottom xl:block xl:h-[527px] xl:w-full  landscape:hidden xl:landscape:block ${
              selectedvehicle === 2 ? "md:object-center" : ""
            }`}
            alt="space rocket"
          />
        </div>

        {/* Circular buttons  */}
        <div className="top-4 my-6 grid grid-flow-col justify-center gap-4 xl:col-start-1 xl:row-start-1 xl:ml-40 xl:mr-20 xl:h-[303px] xl:w-full xl:grid-flow-row">
          {data.technology.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer text-3xl text-white "
              onClick={() => handleClick(index)}
            >
              <div
                className={`grid h-10  w-10 place-items-center rounded-full text-center font-titleFont md:h-[60px] md:w-[60px] xl:h-20 xl:w-20 xl:hover:border-white/50 xl:hover:bg-white/50
                ${
                  index === selectedvehicle
                    ? "bg-white text-techColor"
                    : "border border-menuColor bg-transparent text-menuColor "
                } `}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Descriptions section */}
        <div className="mx-4 grid h-36 place-items-center md:mx-auto md:h-[237px] md:w-[458px] xl:col-span-2 xl:col-start-2 xl:row-start-1 xl:mx-0 xl:h-[303px] xl:w-full xl:place-items-start">
          <h2 className="font-titleFont uppercase text-menuColor/25 md:mb-4 xl:text-left">
            the terminoloy...
          </h2>
          <h1 className="xl: font-titleFont text-2xl uppercase text-white md:text-[40px] xl:text-left">
            {data.technology[selectedvehicle].name}
          </h1>
          <p className="pt-4 text-center font-paragraphFont text-[15px] text-menuColor md:text-base xl:w-[470px] xl:text-left">
            {data.technology[selectedvehicle].description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Technology;
