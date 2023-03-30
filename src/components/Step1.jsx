import React from "react";
import Header from "./Header";
import { useState } from "react";

const Step1 = () => {
  const [formValue, setFormValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:border-red-300"
                placeholder="e.g Stephen King"
              />
            </div>
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
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:border-red-300"
                placeholder="e.g stephenking@lorem.com"
              />
            </div>
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
                className="w-full text-marineBlue font-semibold text-base border border-gray rounded-md py-2 px-3 focus:border-red-300"
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
