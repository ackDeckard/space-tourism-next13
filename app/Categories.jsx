"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const category = [
  {
    id: "1",
    name: "home",
    catUrl: "/",
  },
  {
    id: "2",
    name: "destination",
    catUrl: "/destination",
  },
  {
    id: "3",
    name: "crew",
    catUrl: "/crew",
  },
  {
    id: "4",
    name: "technology",
    catUrl: "/technology",
  },
];

function Categories() {
  const pathname = usePathname();

  return (
    <ul className="grid place-content-center gap-4 p-4 text-xl sm:grid-flow-col md:h-24 md:w-[450px] md:gap-9 md:bg-white/5 md:text-sm md:backdrop-blur-2xl md:backdrop-filter xl:w-[830px] xl:text-base">
      {category.map((item, index) => (
        <li
          key={item.id}
          className={`pr-10 md:py-9 md:pr-0 xl:hover:border-b-2 xl:hover:border-b-menuColor/50 ${
            pathname === item.catUrl
              ? "border-r-2 border-r-menuColor md:border-r-0  md:border-b-2 md:border-b-menuColor "
              : ""
          }
          `}
        >
          <Link
            href={item.catUrl}
            className="mb-16 uppercase transition-all delay-500"
          >
            <span className="pr-2 font-bold md:hidden xl:inline">0{index}</span>{" "}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
