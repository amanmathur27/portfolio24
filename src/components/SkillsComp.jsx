"use client";

import { useRef } from "react";
import SkillCard from "./SkillCard";

const SkillsComp = () => {

  const parentContainer = useRef();

  return (
    <div className="sm:flex flex-col my-10 w-full flex-shrink-0 border-[1px] overflow-hidden" >
      <h3 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[''] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-36 after:bg-primary after:inline-block text-3xl font-semibold mb-12">
        Skills
      </h3>
      <div
        className="flex sm:flex-row flex-col flex-wrap justify-end items-center gap-3 border-[1px] p-9"
        ref={parentContainer}
      >
        <SkillCard reference={parentContainer} /> 
        <SkillCard reference={parentContainer} />
        <SkillCard reference={parentContainer} />
        <SkillCard reference={parentContainer} />
        <SkillCard reference={parentContainer} />
        
      </div>
    </div>
  );
};

export default SkillsComp;

// import { dotpng, logoOutline } from "@/assets";
// import LottieAnim from "@/assets/lottie/LottieAnim";
// import Image from "next/image";

// const SkillsComp = () => {
//   return (
// <div className="sm:flex flex-col my-10 w-full flex-shrink-0">
//   <h3 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[''] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-36 after:bg-primary after:inline-block text-3xl font-semibold mb-12">
//     Skills
//   </h3>
//       <div className="flex flex-wrap justify-between items-center gap-5">
//         <div className="border-[1px] relative">
//           <Image src={dotpng} width={100} height={100} alt="dotspng" className="invert w-[4.5rem] absolute top-0 left-0"/>
//           <LottieAnim width={500} height={500}/>
//           <Image src={dotpng} width={100} height={100} alt="dotspng" className="invert w-[4.5rem] absolute bottom-0 right-0"/>
//         </div>
//         <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-4">
//           <div className="border-[1px] border-grayy md:col-span-4 col-span-6">
//             <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//               Programming Languages
//             </h3>
//             <ul className="text-grayy p-3 text-base leading-relaxed">
//               <li>C/C++</li>
//               <li>Python</li>
//               <li>Javascript</li>
//             </ul>
//           </div>
//           <div className="border-[1px] border-grayy sm:col-span-4 col-span-6">
//             <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//               Databases
//             </h3>
//             <ul className="text-grayy p-3 text-base leading-relaxed">
//               <li>SQL</li>
//               <li>MongoDB</li>
//             </ul>
//           </div>
//           <div className="border-[1px] border-grayy sm:col-span-4 col-span-6">
//             <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//               Web-Dev
//             </h3>
//             <ul className="text-grayy p-3 text-base leading-relaxed">
//               <li>HTML5</li>
//               <li>CSS3</li>
//               <li>React.js</li>
//               <li>Next.js</li>
//               <li>Node.js</li>
//               <li>And other node libraries</li>
//             </ul>
//           </div>
//           <div className="border-[1px] border-grayy sm:col-span-12 col-span-6">
//             <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//               Programming Languages
//             </h3>
//             <ul className="text-grayy p-3 text-base leading-relaxed">
//               <li>C/C++</li>
//               <li>Python</li>
//               <li>Javascript</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsComp;

//       // <div className="grid grid-cols-12 gap-10 justify-center items-center">
//       //   <div className="sm:col-span-4 col-span-12">
//       //     {/* <Image src={dotpng} width={100} height={100} alt="dotpng" className="invert w-16 "/>
//       //     <Image src={logoOutline} width={100} height={100} alt="dotpng" className="w-64"/>
//       //     <Image src={dotpng} width={100} height={100} alt="dotpng" className="invert w-28"/> */}
//       //     <LottieAnim />
//       //   </div>
//       //   <div className="col-span-12 sm:col-span-8 grid grid-cols-12 gap-4">
//       //     <div className="border-[1px] border-grayy sm:col-span-4 col-span-6">
//       //       <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//       //         Programming Languages
//       //       </h3>
//       //       <ul className="text-grayy p-3 text-base leading-relaxed">
//       //         <li>C/C++</li>
//       //         <li>Python</li>
//       //         <li>Javascript</li>
//       //       </ul>
//       //     </div>
//       //     <div className="border-[1px] border-grayy sm:col-span-4 col-span-6">
//       //       <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//       //         Databases
//       //       </h3>
//       //       <ul className="text-grayy p-3 text-base leading-relaxed">
//       //         <li>SQL</li>
//       //         <li>MongoDB</li>
//       //       </ul>
//       //     </div>
//       //     <div className="border-[1px] border-grayy sm:col-span-4 col-span-6">
//       //       <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//       //         Web-Dev
//       //       </h3>
//       //       <ul className="text-grayy p-3 text-base leading-relaxed">
//       //         <li>HTML5</li>
//       //         <li>CSS3</li>
//       //         <li>React.js</li>
//       //         <li>Next.js</li>
//       //         <li>Node.js</li>
//       //         <li>And other node libraries</li>
//       //       </ul>
//       //     </div>
//       //     <div className="border-[1px] border-grayy sm:col-span-12 col-span-6">
//       //       <h3 className="text-ghostWhite text-xl font-semibold border-b-[1px] p-3">
//       //         Programming Languages
//       //       </h3>
//       //       <ul className="text-grayy p-3 text-base leading-relaxed">
//       //         <li>C/C++</li>
//       //         <li>Python</li>
//       //         <li>Javascript</li>
//       //       </ul>
//       //     </div>
//       //   </div>
//       // </div>
