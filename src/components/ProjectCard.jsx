import React from "react";
// import Button from "./Button";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="flex flex-col border-grayy border-[1px] flex-shrink-0">
      <Image
        src={data.thumbnail.img}
        width={500}
        height={300}
        alt={data.thumbnail.alt}
        className="border-grayy border-b-[1px] aspect-video object-cover min-w-full"
      />
      <ul className="flex border-b-[1px] border-grayy flex-wrap text-grayy p-4 font-semibold">
        {data.techStack.map((item, index) => (
          <li key={index} className="text-base pr-2 leading-loose">{item}</li>
        ))}
      </ul>

      <div className="flex flex-col gap-5 p-4">
        <h2 className="text-ghostWhite font-semibold text-2xl">
          {data.projectName}
        </h2>
        <p className="text-grayy text-base text-pretty">{data.projectDesc}</p>
        <div className="flex flex-wrap gap-3 flex-1 text-primary text-base">
          <a href={data.githubLink} target="_blank" className="hover:underline underline-offset-[5px]">Github Repo &rarr;</a>
          {data.liveLink && data.liveLink.isHosted && <a href={data.liveLink.link} target="_blank" className="hover:underline underline-offset-[5px]">Live Link &rarr;</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
