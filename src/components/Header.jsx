import React from "react";
import { useState } from "react";
import data from "../data";

const Header = ({ number }) => {
  const [header, setHeader] = useState(data);
  const { title, text } = header[number];

  return (
    <>
      <div className="">
        <h1 className="text-marineBlue font-bold text-3xl">{title}</h1>
        <p className="text-gray">{text}</p>
      </div>
    </>
  );
};

export default Header;
