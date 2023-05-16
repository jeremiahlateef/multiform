import React, { createContext } from "react";
import Header from "./Header";
import { useState } from "react";
import { useContext } from "react";

export const Step1Context = createContext();

export const useAppContext = () => useContext(Step1Context);

const Step1 = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   email: "",
  //   number: "",
  // });

  const [inputName, setInputName] = useState("");

  const [labelDisplay, setLabelDisplay] = useState("");
  // const handleChange = (e) => {
  //   setUserInput({ ...userInput, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const users = { ...userInput };
    if (name.trim() === "") {
      setLabelDisplay("block");
    } else {
      setLabelDisplay("hidden");
      const value = { name };
      setInputName(value);
      console.log(value);
    }
  };
  // const objectValue = {
  //   userInput: userInput,
  //   setUserInput: setUserInput,
  //   handleSubmit: handleSubmit,
  //   handleChange: handleChange,
  // };
  const objectValue = {
    name: name,
    // handleSubmit,
  };
  console.log(inputName);
  return (
    <Step1Context.Provider value={{ inputName, setInputName }}>
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
                  style={{ display: `${labelDisplay}` }}
                >
                  This field is required
                </label>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:outline-marineBlue"
                placeholder="e.g +1 234 567 890"
              />
            </div>
            <button type="submit">add item</button>
          </form>
        </div>
      </div>
    </Step1Context.Provider>
  );
};

export default Step1;
