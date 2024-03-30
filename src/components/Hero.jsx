import Image from "next/image";
import React from "react";
import { amanpng, dotpng, dots, logoOutline } from "@/assets";
import Button from "./Button";
import { Typewriter } from "nextjs-simple-typewriter";

const Hero = () => {
  return (
    <section className="flex flex-wrap justify-between items-center sm:py-16 py-6 w-full">
      <div className="max-w-[450px] mb-4">
        <h3 className="text-[32px] font-semibold text-ghostWhite">
          I'm a <span className="text-primary"><Typewriter words={['web-developer', 'front-end designer']} loop={false}/></span> and a{" "}
          <span className="text-primary">freelancer{" "}</span>
        </h3>
        <p className="text-[16px] text-grayy my-8">
          I craft responsive websites where technologies meet creativity
        </p>
        <Button btnTxt = "Contact Me = &empty;" linkTo={"#contact"}/>
      </div>
      <div className=" border-primary flex flex-col items-center">
        <div className="border-b-[1px] border-primary relative">
          <Image
            src={logoOutline}
            width={53}
            height={53}
            alt="logo-outline"
            className="absolute top-[10%] z-10 w-56 h-56"
          />
          <Image
            src={amanpng}
            width={400}
            height={400}
            alt="Aman's Photo"
            className="relative z-20"
          />
          <Image
            src={dotpng}
            width={53}
            height={53}
            alt="logo-outline"
            className="absolute z-10 w-24 left-[73%] top-[60%] invert"
          />
        </div>
        <div className="text-base text-grayy font-semibold border-[1px] border-t-[0] border-primary px-3 py-2">
            <p>&empty; = Open for new opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
