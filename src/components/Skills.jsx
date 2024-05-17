import React from "react";
import PythonLogo from "../assets/python.png";
import JavaScriptLogo from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import NodejsLogo from "../assets/nodejs.png";
import GitLogo from "../assets/git.png";
import AWSLogo from "../assets/aws.png";
import DockerLogo from "../assets/docker.png";
import MySQLLogo from "../assets/mysql.png";
import PyTorchLogo from "../assets/pytorch.png";
import HTMLCSSLogo from "../assets/html_css.png";
import JavaLogo from "../assets/java.png";
import CPlusPlusLogo from "../assets/cplusplus.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-[#89d35e]">
      <div className="max-w-[1000px] mx-auto p-4 py-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PythonLogo} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScriptLogo}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactLogo} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodejsLogo} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitLogo} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWSLogo} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={DockerLogo} alt="Docker icon" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQLLogo} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={PyTorchLogo}
              alt="PyTorch icon"
            />
            <p className="my-4">PyTorch</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={HTMLCSSLogo}
              alt="HTML/CSS icon"
            />
            <p className="my-4">HTML/CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaLogo} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CPlusPlusLogo} alt="C++ icon" />
            <p className="my-4">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
