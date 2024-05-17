import React from "react";
import Work1 from "../assets/work1.PNG";
import Work2 from "../assets/work2.png";
import Work3 from "../assets/work3.png";

const Work = () => {
  return (
    <div name="work" className="w-full text-[#89d35e] bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#89d35e] border-yellow-600">
            Work
          </p>
          <p className="py-6">Check Out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Work3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next JS Application
              </span>
              <div className="flex items-center justify-center">
                <a href="https://angricciptamandiri.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vue JS Application
              </span>
              <div className="flex items-center justify-center">
                <a href="https://citraframe.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Csharp Application
              </span>
              <div>
                <a href="https://globalgamejam.org/2020/games/mineself-4">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Demo
                  </button>
                </a>
                <a href="https://globalgamejam.org/2020/games/mineself-4">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Csharp Application
              </span>
              <div>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Csharp Application
              </span>
              <div>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Csharp Application
              </span>
              <div>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg    ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
