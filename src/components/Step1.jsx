import React, { createContext } from "react";
import Header from "./Header";
import { useState } from "react";

export const Step1Context = createContext();

const Step1 = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newUser);
  };
  const objectValue = {
    userInput: userInput,
    setUserInput: setUserInput,
    handleSubmit: handleSubmit,
    handleChange: handleChange,
  };
  return (
    <Step1Context.Provider value={{ ...objectValue }}>
      <div className="">
        <Header number={0} />
        <div className="">
          <form className="w-full" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="w-full mb-3 md:mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="capitalize text-marineBlue mb-2"
                >
                  name
                </label>
                <label
                  htmlFor="name"
                  className=" hidden text-red-500 font-semibold "
                >
                  This field is required
                </label>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                value={userInput.name}
                onChange={handleChange}
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:outline-marineBlue"
                placeholder="e.g Stephen King"
              />
            </div>
            {/* email */}
            <div className="w-full mb-3 md:mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="capitalize text-marineBlue mb-2"
                >
                  Email
                </label>
                <label
                  htmlFor="email"
                  className=" hidden text-red-500 font-semibold "
                >
                  This field is required
                </label>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                value={userInput.email}
                onChange={handleChange}
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:outline-1 focus:outline-marineBlue  focus:border-0 "
                placeholder="e.g stephenking@lorem.com"
              />
            </div>
            {/* Number */}
            <div className="w-full mb-3 md:mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="capitalize text-marineBlue mb-2"
                >
                  Phone number
                </label>
                <label
                  htmlFor="name"
                  className=" hidden text-red-500 font-semibold "
                >
                  This field is required
                </label>
              </div>
              <input
                type="number"
                name="number"
                id="number"
                value={userInput.number}
                onChange={handleChange}
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:outline-marineBlue"
                placeholder="e.g +1 234 567 890"
              />
            </div>
          </form>
        </div>
      </div>
    </Step1Context.Provider>
  );
};

export default Step1;
