import React from "react";
import Image from "next/image";

import emailIcon from "../public/icons/email.svg";
import githubIcon from "../public/icons/github.svg";
import linkedinIcon from "../public/icons/linkedin.svg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="font-Kanit w-4/5 md:w-3/5 mx-auto pt-20 mb-24"
    >
      <h2 className="text-3xl text-gray-400">Contact</h2>

      <p className="text-3xl text-center my-20">Feel free to contact me.</p>
      <section className="font-semibold text-lg md:w-4/5 xl:w-3/5 mx-auto grid grid-cols-3 gap-8 lg:gap-12 xl:gap-20">
        <div>
          <a aria-label="Send an email" href="mailto:basarureten@gmail.com">
            <Image alt="email icon" src={emailIcon} />
          </a>
          <p className="text-center mt-1">Email</p>
        </div>

        <div>
          <a
            aria-label="GitHub"
            href="https://github.com/MANZARACI"
            target="_blank"
          >
            <Image alt="GitHub icon" src={githubIcon} />
          </a>
          <p className="text-center mt-1">GitHub</p>
        </div>

        <div>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/basarureten/"
            target="_blank"
          >
            <Image alt="LinkedIn icon" src={linkedinIcon} />
          </a>
          <p className="text-center mt-1">LinkedIn</p>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
