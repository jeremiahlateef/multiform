import React, { useContext } from "react";
import Header from "./Header";
import { Step1Context } from "./Step1";

const Step4 = () => {
  const value = useContext(Step1Context);
  console.log(value);
  return (
    <>
      <div className="">
        <Header number={3} />
        <div className="p-4">
          {/* <p>{userInput?.name}</p> */}
          <p>Hello</p>
        </div>
      </div>
    </>
  );
};

export default Step4;
