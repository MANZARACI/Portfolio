import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="min-h-screen flex flex-col justify-center items-center m-md:mt-12 m-md:mb-16"
    >
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="font-Kanit text-7xl w-4/5 md:w-3/5"
      >
        <motion.p variants={item}>Hi</motion.p>
        <motion.p variants={item}>
          I am{" "}
          <motion.span className="text-purple-500">Başar Üreten</motion.span>
        </motion.p>
        <motion.p
          variants={item}
          className="text-zinc-400 italic text-2xl mt-5"
        >
          Software Guy - Mostly Web Development
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="font-Kanit text-4xl w-4/5 md:w-3/5 mt-16"
      >
        <motion.h2 className="text-3xl text-gray-400">Who am I?</motion.h2>
        <motion.p className="mt-4 leading-snug m-sm:text-2xl">
          I was a Mathematical Engineering student in Turkey. After my second
          year I have come to Ireland to study Computer Engineering. I am trying
          my best to be a good software developer. I have a great passion about
          gaming and tech related stuff.
        </motion.p>
      </motion.section>
    </section>
  );
};

export default Introduction;
