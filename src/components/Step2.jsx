import React from "react";
import Header from "./Header";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { useState } from "react";
const Step2 = () => {
  const [prices, setPrices] = useState(false);

  // ARCADE FUNCTIONALITY
  // This is to toggle the checked state of the Arcade Plan
  const [checkedBoxes, setCheckedBoxes] = useState(false);

  // Functionality to make all other checkboxes unchecked when a checkbox is clicked
  // Always define the values or you'll get an uncontrolled input error.
  const [checkBoxFunc, setCheckBoxFunc] = useState({
    name: "",
    checked: "true",
  });

  // This is used for the onChange functionality in the arcade checkbox
  const handleSetCheckedBoxes = (e) => {
    // store the name and checked values into a variable and set it to event.target
    const { name, checked } = e.target;

    const updatedCheckbox = { ...checkBoxFunc };

    Object.keys(updatedCheckbox).forEach((key) => {
      updatedCheckbox[key] = false;
    });

    updatedCheckbox[name] = checked;

    setCheckBoxFunc(updatedCheckbox);

    // setCheckedBoxes(e.target.checked);

    // console.log(numbers);
  };

  // ADVANCED FUNCTIONALITY
  // This is to toggle the checked state of the Advanced Plan
  const [advCheckedBoxes, setAdvCheckedBoxes] = useState(false);

  // This is used for the onChange functionality in the Advanced checkbox
  const handleSetAdvCheckedBoxes = (e) => {
    setAdvCheckedBoxes(e.target.checked);
  };

  // PRO FUNCTIONALITY
  // This is to toggle the checked state of the Pro Plan
  const [proCheckedBoxes, setProCheckedBoxes] = useState(false);

  // This is used for the onChange functionality in the Pro checkbox
  const handleSetProCheckedBoxes = (e) => {
    setProCheckedBoxes(e.target.checked);
  };
  // This is the onChange functionality for the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
  const PriceMonthArcade = () => {
    const { price } = { ...monthArcade };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
      </div>
    );
  };
  // This function displays the yearly price plan
  const PriceYearArcade = ({ fee }) => {
    // Use this method to destructure objects not the array method (e.g fee[yearArcade])
    const { price, bonus } = { ...yearArcade };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
        <h3 className="text-marineBlue">{bonus}</h3>
      </div>
    );
  };
  // This function displays the monthly price plan
  const PriceMonthAdvanced = () => {
    const { price } = { ...monthAdvanced };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
      </div>
    );
  };
  // This function displays the yearly price plan for the Advanced Plan
  const PriceYearAdvanced = () => {
    const { price, bonus } = { ...yearAdvanced };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
        <h3 className="text-marineBlue">{bonus}</h3>
      </div>
    );
  };
  // This function displays the monthly price plan for the Pro Plan
  const PriceMonthPro = () => {
    const { price } = { ...monthPro };
    return (
      <div>
        <h2 className="text-gray">{price}</h2>
      </div>
    );
  };
  // This function displays the yearly price plan for Pro
  const PriceYearPro = () => {
    const { price, bonus } = { ...yearPro };
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
  const ToggleBtn = () => {
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
            className="linear duration-500"
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
      <div className="md:w-full">
        <Header number={1} />
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-8 gap-3 ">
            <input
              type="checkbox"
              value="arcade"
              id="arcade"
              name="arcade"
              checked={checkBoxFunc["arcade"]}
              onChange={handleSetCheckedBoxes}
              className="invisible absolute"
            />
            <label
              htmlFor="arcade"
              className="w-full linear duration-200 md:w-1/3 p-4 border rounded-md border-gray hover:border-marineBlue flex md:block items-start  gap-3 cursor-pointer"
            >
              <img src={arcadeImg} alt="" className="md:mb-7" />
              <div className="">
                <h3 className="text-marineBlue text-base font-semibold">
                  Arcade
                </h3>
                {prices ? <PriceYearArcade /> : <PriceMonthArcade />}
              </div>
            </label>
            <input
              type="checkbox"
              value="advanced"
              id="advanced"
              name="advanced"
              checked={checkBoxFunc["advanced"]}
              onChange={handleSetCheckedBoxes}
              className="invisible absolute "
            />
            <label
              htmlFor="advanced"
              className="w-full linear duration-200 md:w-1/3 p-4 border rounded-md border-gray hover:border-marineBlue flex md:block items-start advanced gap-3 cursor-pointer"
            >
              <img src={advancedImg} alt="" className="md:mb-7" />
              <div className="">
                <h3 className="text-marineBlue text-base font-semibold">
                  Advanced
                </h3>
                {prices ? <PriceYearAdvanced /> : <PriceMonthAdvanced />}
              </div>
            </label>
            <input
              type="checkbox"
              value="pro"
              id="pro"
              name="pro"
              checked={checkBoxFunc["pro"]}
              onChange={handleSetCheckedBoxes}
              className="invisible absolute"
            />
            <label
              htmlFor="pro"
              className="w-full linear duration-200 md:w-1/3 p-4 border rounded-md border-gray hover:border-marineBlue flex md:block items-start  gap-3 cursor-pointer"
            >
              <img src={proImg} alt="" className="md:mb-7" />
              <div className="">
                <h3 className="text-marineBlue text-base font-semibold">Pro</h3>
                {prices ? <PriceYearPro /> : <PriceMonthPro />}
              </div>
            </label>
          </div>
          <button type="button" className="" onClick={() => TogglePriceState()}>
            <ToggleBtn />
          </button>
        </form>
      </div>
    </>
  );
};

export default Step2;
