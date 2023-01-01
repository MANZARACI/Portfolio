import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="font-Kanit w-4/5 md:w-3/5 mx-auto pt-20 mb-24">
      <h2 className="text-3xl text-gray-400">Contact</h2>

      <p className="text-3xl text-center my-20">Feel free to contact me.</p>
      <section className="font-semibold text-lg md:w-4/5 xl:w-3/5 mx-auto grid grid-cols-3 gap-8 lg:gap-12 xl:gap-20">
        <div>
          <a href="mailto:basarureten@gmail.com">
            <img src="./icons/email.svg" />
          </a>
          <p className="text-center mt-1">Email</p>
        </div>

        <div>
          <a href="https://github.com/MANZARACI" target="_blank">
            <img src="./icons/github.svg" />
          </a>
          <p className="text-center mt-1">GitHub</p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/ba%C5%9Far-%C3%BCreten-b07a4b1b3/"
            target="_blank"
          >
            <img src="./icons/linkedin.svg" />
          </a>
          <p className="text-center mt-1">LinkedIn</p>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
