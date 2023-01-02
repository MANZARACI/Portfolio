import React from "react";
import Image from "next/image";

import htmlIcon from "../public/icons/html5-original.svg";
import cssIcon from "../public/icons/css3-original.svg";
import bootstrapIcon from "../public/icons/bootstrap-original.svg";
import tailwindIcon from "../public/icons/tailwindcss-plain.svg";
import javascriptIcon from "../public/icons/javascript-original.svg";
import pythonIcon from "../public/icons/python-original.svg";
import javaIcon from "../public/icons/java-original.svg";
import cLanguageIcon from "../public/icons/c-original.svg";
import reactIcon from "../public/icons/react-original.svg";
import nextjsIcon from "../public/icons/nextjs-original.svg";
import nodejsIcon from "../public/icons/nodejs-original.svg";
import expressIcon from "../public/icons/express-original.svg";
import mongodbIcon from "../public/icons/mongodb-original.svg";
import androidStudioIcon from "../public/icons/androidstudio-original.svg";

const SkillsSection = () => {
  return (
    <section id="skills" className="font-Kanit w-4/5 md:w-3/5 mx-auto pt-20">
      <h2 className="text-3xl text-gray-400">Skills</h2>
      <div className="font-semibold grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-12 mt-8">
        <div>
          <Image alt="HTML icon" src={htmlIcon} />
          <p className="text-center">HTML</p>
        </div>

        <div>
          <Image alt="CSS icon" src={cssIcon} />
          <p className="text-center">CSS</p>
        </div>

        <div>
          <Image alt="Bootstrap icon" src={bootstrapIcon} />
          <p className="text-center">Bootstrap</p>
        </div>

        <div>
          <Image alt="Tailwind icon" src={tailwindIcon} />
          <p className="text-center">Tailwind CSS</p>
        </div>

        <div>
          <Image alt="Javascript icon" src={javascriptIcon} />
          <p className="text-center">Javascript</p>
        </div>

        <div>
          <Image alt="Python icon" src={pythonIcon} />
          <p className="text-center">Python</p>
        </div>

        <div>
          <Image alt="Java icon" src={javaIcon} />
          <p className="text-center">Java</p>
        </div>

        <div>
          <Image alt="C language icon" src={cLanguageIcon} />
          <p className="text-center">C</p>
        </div>

        <div>
          <Image alt="React icon" src={reactIcon} />
          <p className="text-center">React</p>
        </div>

        <div>
          <Image alt="Next.js icon" src={nextjsIcon} />
          <p className="text-center">Next.js</p>
        </div>

        <div>
          <Image alt="Node.js icon" src={nodejsIcon} />
          <p className="text-center">Node.js</p>
        </div>

        <div>
          <Image alt="Express icon" src={expressIcon} />
          <p className="text-center">Express.js</p>
        </div>

        <div>
          <Image alt="MongoDB icon" src={mongodbIcon} />
          <p className="text-center">MongoDB</p>
        </div>

        <div>
          <Image alt="Android Studio icon" src={androidStudioIcon} />
          <p className="text-center">Android Studio</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
