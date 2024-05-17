import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-[#89d35e]">
      <div className="flex flex-col justify-center items-center w-full h-full  py-16">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center text-4xl font-bold">
            <p>
              Hi, I'm Kevin Hindra Jaya. Nice to meet you! Please take a look
              around.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p>
              I am a dedicated Systems Analyst with a passion for technology and
              a keen interest in software engineering and AI. In my role at PT.
              Kalibesar Raya Utama (KBRU Insurance Brokers), I conduct
              comprehensive analyses of user requirements and systems,
              translating them into detailed technical specifications. I
              collaborate closely with cross-functional teams to ensure seamless
              integration of front-end components with back-end systems,
              optimizing performance and functionality of web applications.
              <br />
              <br />
              While I enjoy my work as a Systems Analyst, I am also excited
              about the possibilities in software engineering and AI. I am
              currently honing my skills in coding and exploring new
              technologies such as Python, TensorFlow, and React. I am known for
              my strong analytical abilities, problem-solving skills, and
              eagerness to learn and adapt in fast-paced environments.
              <br />
              <br />I am passionate about building excellent software that
              improves the lives of those around me, from individuals and small
              businesses to large enterprise corporations. Feel free to explore
              my work and see how I can contribute to your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
