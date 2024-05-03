import React from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import CustomBadge from "./CustomBadge";

interface PortfolioDialogProps {
  project: {
    title: string;
    description: string;
    image: IconType;
    category: string;
    githubLink: string;
    projectLink: string;
    skill: string[];
  };
}

const PortfolioDialog: React.FC<PortfolioDialogProps> = ({ project }) => {
  return (
    <>
      <div className="max-md:hidden flex md:flex-row w-full py-4 gap-x-10 items-center">
        <div>
          {project.image({
            className: "hover:scale-105 h-40 w-40 rounded-lg text-[#FF014F]",
          })}
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[#C4CFDE]">{project.category}</p>
          <h1 className="text-3xl font-bold my-2">{project.title}</h1>
          <p className="text-md text-[#C4CFDE]  mt-2">{project.description}</p>
          <div className="flex mt-4">
            <div className="flex mt-4">
              {project.skill.map((skill, index) => {
                const colors = [
                  "bg-orange-700",
                  "bg-lime-600",
                  "bg-teal-600",
                  "bg-fuchsia-800",
                  "bg-blue-700",
                  "bg-zin-900",
                ];
                const color = colors[index % colors.length];

                return (
                  <CustomBadge key={index} color={color}>
                    #{skill}
                  </CustomBadge>
                );
              })}
            </div>
          </div>
          <div className="flex mt-4">
            <button className="bg-[#FF014F] flex  text-white px-6 py-2 mt-8 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#FF014F]">
              Github
              <FaGithub className="ml-2 mt-1" />
            </button>

            <button className="bg-[#1E2024] flex  text-[#FF014F] px-6 py-2 mt-8 ml-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md  hover:shadow-[#1a1c20]">
              Live Demo
              <MdOutlineArrowOutward className="ml-2 mt-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex-col w-full items-center">
        <div className="flex items-center justify-between">
          {project.image({
            className: "hover:scale-105 h-16 w-16 rounded-lg text-[#FF014F]",
          })}
          <p className="text-[#C4CFDE]">{project.category}</p>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="md:text-3xl font-bold my-2">{project.title}</h1>
          <p className="md:text-md text-sm text-[#C4CFDE]  mt-2">{project.description}</p>
          <div className="flex mt-4">
            <div className="flex mt-4">
              {project.skill.map((skill, index) => {
                const colors = [
                  "bg-orange-700",
                  "bg-lime-600",
                  "bg-teal-600",
                  "bg-fuchsia-800",
                  "bg-blue-700",
                  "bg-zin-900",
                ];
                const color = colors[index % colors.length];

                return (
                  <CustomBadge key={index} color={color}>
                    # {skill}
                  </CustomBadge>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <button className="bg-[#FF014F] flex  text-white px-6 py-2 mt-8 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#FF014F]">
              Github
              <FaGithub className="ml-2 mt-1" />
            </button>

            <button className="bg-[#1E2024] flex  text-[#FF014F] px-6 py-2 mt-8 ml-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md  hover:shadow-[#1a1c20]">
              Live
              <MdOutlineArrowOutward className="ml-2 mt-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDialog;
