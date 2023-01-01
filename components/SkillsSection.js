import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="font-Kanit w-4/5 md:w-3/5 mx-auto pt-20">
      <h2 className="text-3xl text-gray-400">Skills</h2>
      <div className="font-semibold grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-12 mt-8">
        <div>
          <img src="./icons/html5-original.svg" />
          <p className="text-center">HTML</p>
        </div>

        <div>
          <img src="./icons/css3-original.svg" />
          <p className="text-center">CSS</p>
        </div>

        <div>
          <img src="./icons/bootstrap-original.svg" />
          <p className="text-center">Bootstrap</p>
        </div>

        <div>
          <img src="./icons/tailwindcss-plain.svg" />
          <p className="text-center">Tailwind CSS</p>
        </div>

        <div>
          <img src="./icons/javascript-original.svg" />
          <p className="text-center">Javascript</p>
        </div>

        <div>
          <img src="./icons/python-original.svg" />
          <p className="text-center">Python</p>
        </div>

        <div>
          <img src="./icons/java-original.svg" />
          <p className="text-center">Java</p>
        </div>

        <div>
          <img src="./icons/c-original.svg" />
          <p className="text-center">C</p>
        </div>

        <div>
          <img src="./icons/react-original.svg" />
          <p className="text-center">React</p>
        </div>

        <div>
          <img src="./icons/nextjs-original.svg" />
          <p className="text-center">Next.js</p>
        </div>

        <div>
          <img src="./icons/nodejs-original.svg" />
          <p className="text-center">Node.js</p>
        </div>

        <div>
          <img src="./icons/express-original.svg" />
          <p className="text-center">Express.js</p>
        </div>

        <div>
          <img src="./icons/mongodb-original.svg" />
          <p className="text-center">MongoDB</p>
        </div>

        <div>
          <img src="./icons/androidstudio-original.svg" />
          <p className="text-center">Android Studio</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
