import ProjectCard from "@/components/ProjectCard";
import { weather, snake } from "@/assets";

const Projects = () => {
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
    <div className="sm:mx-32 mx-6 sm:my-32 my-32 sm:px-16 px-6 sm:py-5 py-4 flex flex-col justify-center">
      <div className="text-ghostWhite space-y-4">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">/</span>Projects
        </h1>
        <p className="text-grayy text-base font-semibold">All of My Projects</p>
      </div>

      <div className="sm:my-16 my-16">
        <h2 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[' '] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-44 after:bg-primary after:inline-block text-3xl font-semibold w-full sm:w-0 mb-16">
          WebApps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-3 ">
        {data.map((item, index)=>(
          <ProjectCard data={item} key={index}/>
        ))}
        </div>
      </div>
      <div className="sm:my-16 my-16">
        <h2 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[' '] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-44 after:bg-primary after:inline-block text-3xl font-semibold w-full sm:w-0 mb-16">
          C++
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-3 ">
        {data.map((item, index)=>(
          <ProjectCard data={item} key={index}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
