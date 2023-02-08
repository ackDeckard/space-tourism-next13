import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "./Categories";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="flex w-full place-items-center px-5 pt-2 md:px-0 md:pl-5 md:pt-0 xl:mt-10">
      <Link href="/" className="m-auto bg-transparent px-2 py-1 ">
        <Image
          src="/shared/logo.svg"
          alt="company logo"
          width={0}
          height={0}
          className="h-11 w-11"
        />
      </Link>
      <div className="grow xl:relative xl:left-16 xl:z-20 xl:border xl:border-white/20"></div>

      <button className="relative  h-10 w-10 md:hidden" onClick={handleClick}>
        {isOpen ? (
          <Image
            src="/shared/icon-close.svg"
            alt="Menu open"
            width={0}
            height={0}
            quality={100}
            className="absolute right-0 top-0 z-30 h-6 w-6 translate-y-1/2  duration-300"
          />
        ) : (
          <Image
            src="/shared/icon-hamburger.svg"
            alt="Menu open"
            width={0}
            height={0}
            quality={100}
            className="absolute right-0 top-0 z-30 h-6 w-6 translate-y-1/2 duration-300"
          />
        )}
      </button>

      <div
        className={`${
          isOpen
            ? "fixed top-4 z-20 -m-4 h-screen max-w-sm duration-300 md:hidden"
            : "hidden "
        } `}
      >
        <div className="grid w-screen grid-cols-3  ">
          <div className="col-span-2 col-start-2 h-screen pt-16 pl-4 font-extraFont text-white backdrop-blur-2xl">
            <Categories />
          </div>
        </div>
      </div>

      <div className="hidden text-white  md:block ">
        <Categories />
      </div>
    </header>
  );
}

export default Header;
