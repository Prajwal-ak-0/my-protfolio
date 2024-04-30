import React from "react";
import { IconType } from "react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PortfolioCardProps {
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

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className="bg-gradient-to-br py-8 from-[#1E2024] to-[#23272B] p-4 rounded-lg shadow-lg hover:gradient-to-br hover:from-[#23272B] hover:to-[#1E2024] transition-all duration-300 ease-in-out transform cursor-pointer h-60">
      <project.image className="h-20 w-full object-cover rounded-lg text-[#FF014F]" />
      <h1 className="text-xl text-center font-semibold mt-4 transition-all duration-300 ease-in-out transform hover:translate-y-1">
        {project.title}
      </h1>
    </div>
  );
};

export default PortfolioCard;
