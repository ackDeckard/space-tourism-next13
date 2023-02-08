"use client";
import Image from "next/image";
import React, { useState } from "react";

import data from "../../public/shared/data.json";
import SubHeader from "../SubHeader";

function Destination() {
  const [option, setOption] = useState(0);

  function handleClick(index) {
    setOption(index);
  }

  return (
    <article className="mx-4 text-center md:mx-0 md:text-left">
      <SubHeader code={"01"} text={"pick your destination"} />

      <div
        key={data.destinations[option].name}
        className="xl:mt-24 xl:grid xl:grid-cols-2 xl:place-items-center"
      >
        <div className="m-auto h-auto w-full ">
          <Image
            src={data.destinations[option].images.webp}
            width={0}
            height={0}
            unoptimized
            priority={true}
            className="m-auto h-48 w-48 md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]"
            alt=" space rocket - launch vehicle"
          />
        </div>
        <div className="text-center xl:place-self-start xl:text-left">
          <div className="top-4 mx-auto my-6 grid w-60 grid-flow-col items-center gap-4 md:m-auto md:mt-10 xl:m-0">
            {data.destinations.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer   "
                onClick={() => handleClick(index)}
              >
                {/* the underline bar underneath the planet */}
                <div
                  className={`mx-auto grid h-10 w-auto place-items-center text-sm uppercase md:text-base  xl:place-items-start xl:hover:border-b-4 xl:hover:border-white/50 
                ${
                  index === option
                    ? "border-b-2 border-b-menuColor font-paragraphFont text-white md:border-b-4"
                    : "border-b-2 border-b-transparent bg-transparent font-paragraphFont text-menuColor"
                } `}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          <div className="grid place-items-center xl:place-items-start">
            <h1 className="font-titleFont text-[56px] uppercase text-white md:text-[80px] xl:text-8xl">
              {data.destinations[option].name}
            </h1>
            <p className="h-32 pt-4  font-paragraphFont text-[15px] text-menuColor md:w-[573px] xl:w-[472px]">
              {data.destinations[option].description}
            </p>
          </div>

          <div className="my-8 mx-auto border-b border-line md:w-[573px] xl:mx-0 xl:w-[472px]" />
          <div className=" md:grid md:grid-cols-2 md:gap-12 xl:place-items-start xl:gap-0">
            <div className="grid place-items-center md:justify-self-end xl:place-items-start xl:justify-self-start">
              <h2 className="font-extraFont text-sm uppercase text-menuColor xl:text-left">
                avg. distance
              </h2>
              <h1 className="font-titleFont text-[28px] uppercase text-white xl:text-left">
                {data.destinations[option].distance}
              </h1>
            </div>
            <div className="my-8 grid place-items-center md:my-0 md:justify-self-start xl:place-items-start ">
              <h2 className="font-extraFont text-sm uppercase text-menuColor  xl:text-left">
                est. travel time
              </h2>
              <h1 className="font-titleFont text-[28px] uppercase text-white xl:text-left">
                {data.destinations[option].travel}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Destination;
