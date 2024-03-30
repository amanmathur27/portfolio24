import { amanpng } from "@/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="sm:mx-32 mx-6 sm:my-32 my-32 sm:px-16 px-6 sm:py-5 py-4 flex flex-col justify-center">
      <div className="text-ghostWhite space-y-4">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">/</span>About Me
        </h1>
        <p className="text-grayy text-base">Who am I?</p>
      </div>

      <div className="flex items-center gap-10 justify-start mt-24 flex-col md:flex-row">
        <Image
          src={amanpng}
          alt="aman"
          width={300}
          height={300}
          className="w-96 border-b-[1px] border-primary"
        />
        <div className="space-y-4 text-grayy text-base max-w-[720px]">
          <p>
            I'm a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online.
          </p>
          <p>
            I always strive to learn about the newest technologies and
            frameworks.
          </p>
        </div>
      </div>

      <div className="sm:my-16 my-16">
        <h2 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[' '] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-44 after:bg-primary after:inline-block text-3xl font-semibold w-full sm:w-0 mb-16">
          skills
        </h2>
        <div className="flex flex-wrap gap-3 md:flex-row items-center flex-col">
          <div className="border-[1px] border-grayy">
            <h3 className="text-ghostWhite text-lg font-semibold border-b-[1px] p-3">
              Programming Languages
            </h3>
            <ul className="text-grayy p-3 text-base leading-relaxed">
              <li>C/C++</li>
              <li>Python</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="border-[1px] border-grayy">
            <h3 className="text-ghostWhite text-lg font-semibold border-b-[1px] p-3">
              Programming Languages
            </h3>
            <ul className="text-grayy p-3 text-base leading-relaxed">
              <li>C/C++</li>
              <li>Python</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="border-[1px] border-grayy">
            <h3 className="text-ghostWhite text-lg font-semibold border-b-[1px] p-3">
              Programming Languages
            </h3>
            <ul className="text-grayy p-3 text-base leading-relaxed">
              <li>C/C++</li>
              <li>Python</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="border-[1px] border-grayy">
            <h3 className="text-ghostWhite text-lg font-semibold border-b-[1px] p-3">
              Programming Languages
            </h3>
            <ul className="text-grayy p-3 text-base leading-relaxed">
              <li>C/C++</li>
              <li>Python</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:my-16 my-16">
        <h2 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[' '] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-44 after:bg-primary after:inline-block text-3xl font-semibold w-full sm:w-0 mb-16">
          Education
        </h2>

        <ol className="relative border-s border-grayy dark:border-gray-700 text-base text-grayy">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none dark:text-gray-500">
              2020 - Current
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Bachelor of Technology (B. Tech)
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-ghostWhite">
              Siliguri Institute of Technology
            </h3>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2017 - 2019
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Intermediate of Science (ISc)
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              St. Xavier's College, Ranchi
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2017
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              St. Paul's School, Hazaribagh
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Secondary School Certificate
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
