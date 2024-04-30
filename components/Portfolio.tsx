"use client";

import PortfolioCard from "./PortfolioCard";
import { FaChartLine } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import CustomBadge from "./CustomBadge";
import PortfolioDialog from "./PortfolioDialog";

const Portfolio = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const myProjects = [
    {
      title: "Stock Market Prediction",
      description:
        "Developed a machine learning model to predict stock market trends and fluctuations using historical stock data and advanced predictive analytics techniques. The model was trained on various machine learning algorithms, including Random Forest, Gradient Boosting, and Long Short-Term Memory (LSTM) networks.",
      image: FaChartLine,
      category: "Machine Learning",
      githubLink: "https://github.com/yourusername/stock-market-prediction",
      projectLink: "https://example.com/stock-market-prediction-demo",
      skill: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      title: "Image Captioning",
      description:
        "Implemented an image captioning system that generates descriptive captions for images using deep learning and natural language processing techniques. The system leverages pre-trained convolutional neural networks (CNNs) such as VGG16 and employs recurrent neural networks (RNNs) like LSTM to generate captions based on image features.",
      image: FaImage,
      category: "Deep Learning",
      githubLink: "https://github.com/yourusername/image-captioning",
      projectLink: "https://example.com/image-captioning-demo",
      skill: [
        "Python",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
      ],
    },
    {
      title: "Reinforcement Learning for Python Game AI",
      description:
        "Trained an AI agent to play a Python game using Reinforcement Learning techniques, enabling the agent to learn and adapt its strategies over time. The project utilized OpenAI Gym environments and implemented algorithms such as Q-Learning and Deep Q-Networks (DQN) to train the AI agent.",
      image: IoGameController,
      category: "Artificial Intelligence",
      githubLink:
        "https://github.com/yourusername/reinforcement-learning-game-ai",
      projectLink: "https://example.com/reinforcement-learning-demo",
      skill: ["Python", "Reinforcement Learning", "Artificial Intelligence"],
    },
    {
      title: "PDF Summarizer using Large Language Models (LLM)",
      description:
        "Developed a PDF summarization tool leveraging Large Language Models (LLM) to automatically generate concise summaries from lengthy documents. The tool integrates pre-trained LLMs such as GPT-3 and fine-tunes them on domain-specific datasets to enhance summarization performance.",
      image: FaFilePdf,
      category: "Natural Language Processing",
      githubLink: "https://github.com/yourusername/pdf-summarizer-llm",
      projectLink: "https://example.com/pdf-summarizer-demo",
      skill: ["Python", "Natural Language Processing", "Machine Learning"],
    },
    {
      title: "Modal Building with Large Language Models (LLM)",
      description:
        "Built a modal interface using Large Language Models (LLM) to enhance user interaction and provide dynamic responses based on user input. The modal leverages the capabilities of LLMs such as BERT and GPT-3 to generate context-aware responses and improve user engagement.",
      image: LuBrainCircuit,
      category: "User Interface",
      githubLink: "https://github.com/yourusername/modal-building-llm",
      projectLink: "https://example.com/modal-building-demo",
      skill: ["Python", "Frontend Development", "User Interface Design"],
    },
    {
      title: "Machine Learning Model",
      description:
        "Developed a custom machine learning model for a specific use case, leveraging various algorithms and techniques to achieve desired outcomes. The model involved preprocessing techniques such as feature scaling and encoding, and it utilized algorithms like Logistic Regression and Support Vector Machines (SVM) for classification tasks.",
      image: FaRobot,
      category: "Machine Learning",
      githubLink: "https://github.com/yourusername/machine-learning-model",
      projectLink: "https://example.com/machine-learning-model-demo",
      skill: [
        "Python",
        "Machine Learning",
        "Data Preprocessing",
        "Model Evaluation",
      ],
    },
  ];

  return (
    <div className="px-20 py-16">
      <div className="flex flex-col items-center">
        <p className="text-[#FF014F] font-light tracking-widest py-2">
          CHECK OUT MY WORK
        </p>
        <h1 className="py-6 text-6xl font-bold">My Portfolio</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {myProjects.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <button onClick={() => setOpenDialog(index)}>
                <PortfolioCard project={project} />
              </button>
            </DialogTrigger>
            <DialogContent>
              <PortfolioDialog project={project} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
