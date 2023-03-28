import React from "react";

// The value and setValue here will be the value of the useState in App.jsx
const Buttons = ({ filterItems, button, value, setValue }) => {
  return (
    <div className="flex md:justify-start md:items-start md:flex-col absolute z-20 w-full md:w-2/5  justify-center gap-x-4 md:top-0 top-4   md:h-full md:py-12 md:px-6 xl:p-12  h-[5rem] md:gap-y-6">
      {button.map((btn, index) => {
        const { buttons, step, info } = btn;
        return (
          <div
            className="flex md:gap-x-4 items-center justify-center "
            key={index}
          >
            <button
              className={`h-8 w-8 md:h-10 md:w-10  rounded-full font-ubuntu font-medium border-white text-white border-2
                          ${
                            // if index equals value, then add the classes.
                            index === value &&
                            `bg-lightBlue text-marineBlue  border-transparent`
                          }`}
              type="button"
              onClick={() => setValue(index)}
            >
              {buttons}
            </button>
            <div className="hidden md:block ">
              <h4 className="uppercase text-lightGray">{step}</h4>
              <h4 className="uppercase font-bold text-alabaster">{info}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
