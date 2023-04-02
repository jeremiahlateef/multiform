import React from "react";
import Header from "./Header";
import arcade from "../assets/images/icon-arcade.svg";
import { useState } from "react";
const Step2 = () => {
  const [prices, setPrices] = useState(false);
  // This is the data for the month price.
  const [monthPrice, setMonthPrice] = useState([
    { id: 0, price: "$8" },
    { id: 1, price: "$9" },
    { id: 2, price: "$10" },
  ]);

  // This is the data for the year price.
  const [yearPrice, setYearPrice] = useState([
    { id: 0, price: "$8", bonus: "2 months free" },
    { id: 1, price: "$9", bonus: "2 months free" },
    { id: 2, price: "$10", bonus: "2 months free" },
  ]);
  const PriceMonth = ({ fee }) => {
    const { id, price } = fee[monthPrice];
    return (
      <div>
        <h2>{price}</h2>
      </div>
    );
  };
  const PriceYear = ({ fee }) => {
    const { id, price, bonus } = fee[yearPrice];

    return (
      <div>
        <h2>{price}</h2>
        <h3>{bonus}</h3>
      </div>
    );
  };

  // The function is used to toggle the prices value from true to false
  const TogglePriceState = () => {
    setPrices(!prices);
  };
  const handleClick = () => {
    console.log(prices);
  };
  return (
    <>
      <div className="">
        <Header number={1} />
        <div className="w-full p-4 border rounded-md border-marineBlue flex md:block">
          <img src={arcade} alt="" />
          <div className="p-2">
            {prices ? (
              <div>
                <h4>hello there </h4>
              </div>
            ) : (
              <div>
                <h2>please login</h2>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="p-3 mt-3 rounded-md bg-marineBlue text-white capitalize"
        onClick={() => TogglePriceState()}
      >
        Toggle
      </button>
    </>
  );
};

export default Step2;
