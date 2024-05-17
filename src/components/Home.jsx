import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#89ad58]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#89d35e]">
          Kevin Hindra Jaya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a5c678]">
          Aspiring AI Software Engineer
        </h2>
        <p className="text-[#a5c678] py-4 max-w-[700px]">
          I'm a dedicated Systems Analyst with a passion for technology and a
          keen interest in software engineering and AI. With extensive
          experience in analyzing complex systems and crafting innovative
          solutions, I'm currently honing my skills in coding and exploring new
          technologies to transition into software engineering and AI.
        </p>
        <div className="flex">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
            View Work
            <span className="group-hover:rotate-90 duration-300 pb-0.5">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
