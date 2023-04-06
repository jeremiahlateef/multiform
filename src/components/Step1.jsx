import React from "react";
import Header from "./Header";
import { useState } from "react";

const Step1 = ({ setFormValue, value, setValue }) => {
  // This useState function below is to store the value inputted in the forms.

  const [userInput, setUserInput] = useState({
    // To make this work: 1. set name to name in the input for name, value as formValue.name
    // 2. set name to email in the input for name, value as formValue.email
    // 3. set name to number in input for number, value as formValue.number
    // set onChange to handleChange
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    //set the useState function (setUserInput) to the value that will be inputted in the form.
    // In other words, we update the value in the object to what is inputted.
    // We used dynamic keys
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData.fromEntries(e.currentTarget);
    console.log(formData);
    const newUser = Object.fromEntries(formData);

    console.log(newUser);
    // setFormValue(console.log("hi"));
  };
  // const mockBtn = () => {
  //   setFormValue(handleSubmit);
  //   console.log("hi");
  // };

  // mockBtn;
  return (
    <>
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
    </>
  );
};

export default Step1;
