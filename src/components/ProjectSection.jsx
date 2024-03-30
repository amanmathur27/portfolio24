import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { snake, weather } from "@/assets";

const ProjectSection = () => {
  const data = [
    {
      techStack: [
        "Node.js",
        "React.js",
        "Tailwind CSS",
        "RapidAPI's weather API",
      ],
      projectName: "React Weather App",
      projectDesc:
        "A Weather Web-App built using React.js, integrated API services to provide real-time weather data and styled it with tailwinnd css",
      thumbnail: {
        img: weather,
        alt: "An weather image",
      },
      githubLink: "https://github.com/amanmathur27/react-weather-app",
      liveLink: {
        isHosted: true,
        link: "https://react-weather-app-gamma-ten.vercel.app/",
      },
    },
    {
      techStack: ["C++"],
      projectName: "Snake & Ladders CLI Game",
      projectDesc:
        "A simple command-line interface (CLI) game of Snake & Ladders implemented in C++.",
      thumbnail: {
        img: snake,
        alt: "An snake-ladder board image",
      },
      githubLink: "https://github.com/amanmathur27/snakeLadder-Game",
      liveLink: {
        isHosted: false,
        link: "https://react-weather-app-gamma-ten.vercel.app/",
      },
    },
    {
      techStack: [
        "Node.js",
        "React.js",
        "Tailwind CSS",
        "RapidAPI's weather API",
      ],
      projectName: "React Weather App",
      projectDesc:
        "A Weather Web-App built using React.js, integrated API services to provide real-time weather data and styled it with tailwinnd css",
      thumbnail: {
        img: snake,
        alt: "An snake-ladder board image",
      },
      githubLink: "https://github.com/amanmathur27/react-weather-app",
      liveLink: {
        isHosted: true,
        link: "https://react-weather-app-gamma-ten.vercel.app/",
      },
    },
  ];

  return (
    <div className="sm:my-16 my-16">
      <div className="flex justify-between items-center flex-wrap mb-12 gap-5">
        <h3 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[''] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-44 after:bg-primary after:inline-block text-3xl font-semibold w-full sm:w-0">
          Projects
        </h3>
        <Link
          className="text-ghostWhite text-lg hover:underline underline-offset-[5px]"
          href={"/projects"}
        >
          View all &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-3 ">
        {data.map((item, index) => (
          <ProjectCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
