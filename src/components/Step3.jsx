import React, { useState } from "react";
import Header from "./Header";
import { FaCheck } from "react-icons/fa";

const Step3 = () => {
  const [category, setCategory] = useState(false);

  // ADVANCED FUNCTIONALITY
  // This is to toggle the checked state of the Service Plan
  const [serviceCheckedBoxes, setServiceCheckedBoxes] = useState(false);

  // This is used for the onChange functionality in the Advanced checkbox
  const handleServiceCheckedBoxes = (e) => {
    setServiceCheckedBoxes(e.target.checked);
  };

  // PRO FUNCTIONALITY
  // This is to toggle the checked state of the Pro Plan
  const [proCheckedBoxes, setProCheckedBoxes] = useState(false);

  // This is used for the onChange functionality in the Pro checkbox
  const handleSetProCheckedBoxes = (e) => {
    setProCheckedBoxes(e.target.checked);
  };

  const [monthService, setMonthService] = useState({ price: "$1/mo" });

  const [yearService, setYearService] = useState({ price: "$10/yr" });
  // This function displays the monthly price plan for the Pro Plan
  const PriceMonthService = () => {
    const { price } = { ...monthService };
    return (
      <div>
        <h2 className="text-marineBlue">{price}</h2>
      </div>
    );
  };
  // This function displays the yearly price plan for Pro
  const PriceYearService = () => {
    const { price } = { ...yearService };
    return (
      <div>
        <h2 className="text-marineBlue">{price}</h2>
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="">
        <Header number={2} />
        <form action="" onSubmit={handleSubmit}>
          <div className=" mb-8 gap-3">
            <div className="relative ">
              <input
                type="checkbox"
                id="service"
                value={"service"}
                name="service"
                className="invisible absolute checkbox"
                checked={serviceCheckedBoxes}
                onChange={handleServiceCheckedBoxes}
              />
              <span className="absolute top-1/2 transform left-4 -translate-y-1/2 border-gray border  w-5 h-5 rounded-sm ">
                <FaCheck
                  className={` h-3 w-3 absolute transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                    serviceCheckedBoxes ? `text-white` : `text-transparent`
                  }`}
                />
              </span>
              <label
                htmlFor="service"
                className="flex items-center justify-between  border rounded-md border-gray hover:border-marineBlue duration-200   p-4 gap-4"
              >
                <div className="flex gap-4 pl-8 md:pl-10">
                  {" "}
                  <div className="">
                    <h3 className="text-marineBlue text-base font-semibold">
                      Online Service
                    </h3>
                    <h2 className="text-gray">Access to multiplayer games</h2>
                  </div>
                </div>
                <div className="">
                  {category ? <PriceYearService /> : <PriceMonthService />}
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step3;
