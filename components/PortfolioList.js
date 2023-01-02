import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Image from "next/image";

import { projects } from "../data/Projects";

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1 },
  },
};

const PortfolioList = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  return (
    <>
      {selectedCardId && (
        <Modal
          project={projects[selectedCardId - 1]}
          closeHandler={() => setSelectedCardId(null)}
        />
      )}
      <motion.ul
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8"
      >
        {[...projects].reverse().map((project) => {
          return (
            <motion.li
              className="bg-[#313131] hover:bg-[#414141] rounded-md p-4 drop-shadow-lg hover:z-10 hover:cursor-pointer"
              variants={listItem}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedCardId(project.id)}
              key={project.id}
            >
              <motion.h2 className="font-semibold text-xl">
                {project.projectName}
              </motion.h2>
              <motion.div className="mt-2">
                <Image
                  width={384}
                  height={216}
                  alt={`image of ${project.projectName}`}
                  src={project.imgSrc}
                />
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default PortfolioList;
