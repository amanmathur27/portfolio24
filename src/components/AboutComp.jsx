import { amanpng } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const AboutComp = () => {
  return (
    <div className="grid grid-cols-12 justify-between items-center gap-5 my-8">
      <div className="col-span-12 md:col-span-8">
        <h3 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[''] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-32 after:bg-primary after:inline-block text-3xl font-semibold mb-12">
          About
        </h3>
        <p className="text-base text-grayy mb-6 max-w-[700px]">
          I'm a self-taught front-end developer based in Siliguri, India. I can
          develop responsive websites from scratch and raise them into modern
          user-friendly web experiences.
        </p>
        <p className="text-base text-grayy mb-10 max-w-[700px]">
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        <Button btnTxt="About Me = &empty;" linkTo={"/about"}/>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Image src={amanpng} width={500} height={500} alt="aman iamge" className="border-b-[1px] border-b-primary"/>
      </div>
    </div>
  );
};

export default AboutComp;
