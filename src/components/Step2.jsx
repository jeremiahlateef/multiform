import React from "react";
import Header from "./Header";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { useState } from "react";
const Step2 = () => {
  const [prices, setPrices] = useState(false);

  // You can only add one object to a useState hook.
  // This is the data for the month price for the arcade plan
  const [monthArcade, setMonthArcade] = useState({ price: "$9/mo" });

  // This is the data for the year price for the arcade plan.
  const [yearArcade, setYearArcade] = useState({
    price: "$90/yr",
    bonus: "2 months free",
  });

  // This is the data for the advanced plan
  const [monthAdvanced, setMonthAdvanced] = useState({ price: "$12/mo" });

  // This is the data for the year price for the advanced plan.
  const [yearAdvanced, setYearAdvanced] = useState({
    price: "$120/yr",
    bonus: "2 months free",
  });
  // This is the data for the pro plan
  const [monthPro, setMonthPro] = useState({ price: "$15/mo" });

  // This is the data for the year price for the pro plan.
  const [yearPro, setYearPro] = useState({
    price: "$150/yr",
    bonus: "2 months free",
  });

  // This function displays the monthly price plan
  const PriceMonth = () => {
    const { price } = { ...monthArcade };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
      </div>
    );
  };
  // This function displays the yearly price plan
  const PriceYear = ({ fee }) => {
    // Use this method to destructure objects not the array method (e.g fee[yearArcade])
    const { price, bonus } = { ...yearArcade };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
        <h3 className="text-marineBlue">{bonus}</h3>
      </div>
    );
  };

  // The function is used to toggle the prices value from true to false
  const TogglePriceState = () => {
    setPrices(!prices);
  };
  // This changes the switches the boolean state of the button
  const handleCheck = () => {
    setPrices(e.target.value);
  };

  // This is the component for the toggle button
  // The style for the component is in App.css
  const ToggleBt = () => {
    return (
      <div
        id="w-full"
        className="bg-alabaster flex justify-center items-center gap-6 w-full p-4 rounded-md"
      >
        {/* The text color will change to gray if prices is positive and vice-versa. prices is currently negative */}
        <span
          className={`font-semibold ${
            prices ? `text-gray` : `text-marineBlue`
          }`}
        >
          Monthly
        </span>
        <label htmlFor="button" className="switch">
          <input
            type="checkbox"
            checked={prices}
            name="button"
            id="button"
            onChange={handleCheck}
          />
          <span className="slider round"></span>
        </label>
        {/* The text color will change to gray if prices is negative and vice-versa. prices is currently negative */}
        <span
          className={` font-semibold ${
            prices ? `text-marineBlue` : `text-gray`
          }`}
        >
          Yearly
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="md:w-full mb-8">
        <Header number={1} />
        <form action="">
          <div className="flex flex-col md:flex-row  gap-3 ">
            <div className="w-full p-4 border rounded-md border-marineBlue flex md:block items-start gap-3">
              <img src={arcadeImg} alt="" className="md:mb-7" />
              <div className="">
                <h3 className="text-marineBlue text-base font-semibold">
                  Arcade
                </h3>
                {prices ? <PriceYear /> : <PriceMonth />}
              </div>
            </div>
            <div className="w-full p-4 border rounded-md border-marineBlue flex md:block items-start gap-3">
              <img src={advancedImg} alt="" className="md:mb-7" />
              <div className="">
                <h3 className="text-marineBlue text-base font-semibold">
                  Arcade
                </h3>
                {prices ? <PriceYear /> : <PriceMonth />}
              </div>
            </div>
            <div className="w-full p-4 border rounded-md border-marineBlue flex md:block items-start gap-3">
              <img src={proImg} alt="" className="md:mb-7" />
              <div className="">
                <h3 className="text-marineBlue text-base font-semibold">
                  Arcade
                </h3>
                {prices ? <PriceYear /> : <PriceMonth />}
              </div>
            </div>
          </div>
        </form>
      </div>

      <button type="button" className="" onClick={() => TogglePriceState()}>
        <ToggleBt />
      </button>
    </>
  );
};

export default Step2;
