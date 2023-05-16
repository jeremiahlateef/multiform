import React, { useContext } from "react";
import Header from "./Header";
import { Step1Context, useAppContext } from "./Step1";

const Step4 = () => {
  // const { inputName } = useAppContext();
  // console.log(inputName);

  return (
    <>
      <div className="">
        <Header number={3} />
        <div className="p-4">
          {/* <p>{inputName?.name}</p> */}
          <p>Hello</p>
        </div>
      </div>
    </>
  );
};

export default Step4;
