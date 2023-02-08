import React from "react";

function SubHeader(props) {
  return (
    <h1 className="mx-6 mb-8 mt-6 font-paragraphFont uppercase text-white md:mt-8 md:text-xl xl:ml-40 xl:mt-20 xl:text-[28px]">
      <span className="mr-4 tracking-widest opacity-25">{props.code}</span>{" "}
      {props.text}
    </h1>
  );
}

export default SubHeader;
