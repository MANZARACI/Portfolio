import React from "react";
import Image from "next/image";

export default function Modal({ closeHandler, project }) {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-secondaryColor">
            {/*header*/}
            <div className="flex items-center justify-between p-4 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{project.projectName}</h3>
              <button onClick={closeHandler}>
                <img className="w-6" src="./icons/cross.svg" />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-4 m-sm:p-0 flex-auto">
              <Image
                width={960}
                height={540}
                alt={`image of ${project.projectName}`}
                src={project.imgSrc}
              />
              <p className="text-lg mb-1 mt-2 m-sm:mx-4">
                {project.description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center space-x-3 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <a
                href={project.liveUrl}
                target="_blank"
                className="bg-purple-600 hover:bg-purple-700 py-1 px-2 rounded text-lg cursor-pointer"
              >
                Live App
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="bg-emerald-500 hover:bg-emerald-600 py-1 px-2 rounded text-lg cursor-pointer"
              >
                Open in GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
