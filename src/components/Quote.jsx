import React from "react";

const Quote = () => {
  return (
    <figure className="border-grayy border-[1px] relative sm:my-16 my-16">
      <blockquote
        className={`py-3 sm:py-[32px] px-10 sm:px-[75px] text-base sm:text-[24px] font-semibold text-ghostWhite bg-backgnd before:content-['"'] before:absolute before:text-[64px] before:-top-[1px] before:bg-backgnd before:h-2 before:left-[16] before:text-grayy`}
      >
        With great power comes great electricity bill
      </blockquote>
      <figcaption className="font-semibold absolute text-grayy border-[1px] border-grayy p-[8px] -right-[0.5px] text-[12px] sm:text-base before:content-['-']">
        {" "}
        Dr. Who
      </figcaption>
    </figure>
  );
};

export default Quote;
