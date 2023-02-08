import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-4 grid justify-center text-center md:mx-0 xl:grid-flow-col xl:grid-cols-2 xl:place-items-center">
      <div className="mx-auto mt-12 md:mx-0 md:h-[334px] md:w-[450px] xl:h-[382px] xl:place-self-center xl:text-left">
        <h3 className="font-paragraphFont uppercase tracking-wider text-menuColor md:text-xl xl:mb-6 xl:text-[28px]">
          So, you want to travel to
        </h3>
        <h1 className="py-2 font-titleFont text-[80px] uppercase  tracking-widest text-white md:text-[9rem] xl:text-[150px]">
          Space
        </h1>

        <p className="font-paragraphFont text-[15px] leading-6 text-homeParagraph md:w-[440px] md:p-0 md:text-center md:text-lg xl:w-full xl:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link
        href="/destination"
        className="mt-20 mb-12 grid h-36 w-36 place-items-center justify-self-center rounded-full bg-white pt-2 font-titleFont text-xl uppercase md:mt-36 md:h-60 md:w-60 md:text-[32px] xl:h-[274px] xl:w-[274px] xl:place-self-center xl:hover:outline xl:hover:outline-[88px] xl:hover:outline-white/50 xl:hover:transition-all xl:hover:delay-200 xl:hover:duration-500"
      >
        Explore
      </Link>
    </main>
  );
}
