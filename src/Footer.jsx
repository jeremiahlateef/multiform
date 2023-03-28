import React from "react";

const Footer = ({ footBtn, value, setValue }) => {
  // use an array to display just one item
  const { footerOne, footerTwo } = footBtn[value];
  console.log(footBtn);
  return (
    <footer className="bg-white absolute md:relative md:bottom-auto bottom-0 h-20 w-full md:mx-auto right-0 md:w-full">
      <button
        type="button"
        className={`bg-white capitalize text-gray p-3 mx-auto transform -translate-y-1/2 top-1/2 rounded absolute md:left-0 left-6 ${
          value === 0 && `p-0`
        }`}
        onClick={() => setValue(value >= 0 ? value - 1 : value)}
      >
        {footerOne}
      </button>
      <button
        type="button"
        className={`bg-marineBlue text-white capitalize p-3 mx-auto transform -translate-y-1/2 top-1/2 rounded absolute md:right-0 right-6 `}
        //   Set the conditions that will move the buttons
        onClick={() => setValue(value <= 2 ? value + 1 : value)}
      >
        {footerTwo}
      </button>
    </footer>
  );
};

export default Footer;
