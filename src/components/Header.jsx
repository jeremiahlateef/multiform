import React from "react";
import { useState } from "react";
import data from "../data";

const Header = ({ number }) => {
  const [header, setHeader] = useState(data);
  const { title, text } = header[number];

  return (
    <>
      <div className="mb-4 md:mb-8 ">
        <h1 className="text-marineBlue w-full font-bold text-lg md:text-3xl">
          {title}
        </h1>
        <p className="text-gray text-sm md:text-base">{text}</p>
      </div>
    </>
  );
};

export default Header;
