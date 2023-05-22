import React, { useState } from "react";
import Header from "./Header";
import { FaCheck } from "react-icons/fa";

const Step3 = () => {
  const [category, setCategory] = useState(false);

  // SERVICE FUNCTIONALITY
  // This is to toggle the checked state of the Service Plan
  const [serviceCheckedBoxes, setServiceCheckedBoxes] = useState(false);

  // This is used for the onChange functionality in the service checkbox
  const handleServiceCheckedBoxes = (e) => {
    setServiceCheckedBoxes(e.target.checked);
  };

  // This is used to toggle the content of month in service
  const [monthService, setMonthService] = useState({ price: "+$1/mo" });

  // This is used to toggle the content of year in service
  const [yearService, setYearService] = useState({ price: "+$10/yr" });

  // This function displays the monthly price plan for the service Plan
  const PriceMonthService = () => {
    const { price } = { ...monthService };
    return (
      <div>
        <h2 className="text-marineBlue text-sm md:text-base">{price}</h2>
      </div>
    );
  };

  // This function displays the yearly price plan for service plan
  const PriceYearService = () => {
    const { price } = { ...yearService };
    return (
      <div>
        <h2 className="text-marineBlue text-sm md:text-base">{price}</h2>
      </div>
    );
  };

  // STORAGE FUNCTIONALITY
  // This is to toggle the checked state of the Storage Plan
  const [storageCheckedBoxes, setStorageCheckedBoxes] = useState(false);

  // This is used for the onChange functionality in the Storage checkbox
  const handleSetStorageCheckedBoxes = (e) => {
    setStorageCheckedBoxes(e.target.checked);
  };
  // PROFILE FUNCTIONALITY
  // This is to toggle the checked state of the Profile Plan
  const [profileCheckedBoxes, setProfileCheckedBoxes] = useState(false);

  // This is used to toggle the content of month in storage and profile
  const [monthStoragePro, setMonthStoragePro] = useState({ price: "+$2/mo" });

  // This is used to toggle the content of month in storage and profile
  const [yearStoragePro, setYearStoragePro] = useState({ price: "+$20/yr" });
  // This function displays the monthly price plan for the storage and profile Plan

  // This is used for the onChange functionality in the Profile checkbox
  const handleSetProfileCheckedBoxes = (e) => {
    setProfileCheckedBoxes(e.target.checked);
  };
  const PriceMonthStorageProf = () => {
    const { price } = { ...monthStoragePro };
    return (
      <div>
        <h2 className="text-marineBlue text-sm md:text-base">{price}</h2>
      </div>
    );
  };

  // This function displays the yearly price plan for storage and profile plan
  const PriceYearStorageProf = () => {
    const { price } = { ...yearStoragePro };
    return (
      <div>
        <h2 className="text-marineBlue text-sm md:text-base">{price}</h2>
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
          <div className=" mb-5 md:mb-8 grid gap-y-4">
            <div className="relative ">
              <input
                type="checkbox"
                id="service"
                value={serviceCheckedBoxes}
                name="service"
                className="absolute invisible top-8   checkbox"
                checked={serviceCheckedBoxes}
                onChange={handleServiceCheckedBoxes}
              />

              <label
                htmlFor="service"
                className="flex items-center justify-between  border rounded-md border-gray hover:border-marineBlue duration-200 p-3 md:p-4 gap-4"
              >
                <div className="flex gap-4 items-center">
                  {" "}
                  <span
                    className={`grid items-center justify-center border-gray border  w-4 h-4 md:h-5 md:w-5 rounded-sm ${
                      serviceCheckedBoxes ? `bg-purplishBlue border-none` : ``
                    } `}
                  >
                    <FaCheck
                      className={` h-3 w-3  ${
                        serviceCheckedBoxes ? `text-white` : `text-transparent`
                      }`}
                    />
                  </span>
                  <div className="">
                    <h3 className="text-marineBlue text-sm md:text-base font-semibold">
                      Online service
                    </h3>
                    <h2 className="text-gray text-sm md:text-base">
                      Access to multiplayer games
                    </h2>
                  </div>
                </div>
                <div className="">
                  {category ? <PriceYearService /> : <PriceMonthService />}
                </div>
              </label>
            </div>
            <div className="relative ">
              <input
                type="checkbox"
                id="storage"
                value={storageCheckedBoxes}
                name="storage"
                className="absolute invisible checkbox"
                checked={storageCheckedBoxes}
                onChange={handleSetStorageCheckedBoxes}
              />

              <label
                htmlFor="storage"
                className="flex items-center justify-between  border rounded-md border-gray hover:border-marineBlue duration-200   p-3 md:p4 gap-4"
              >
                <div className="flex gap-4 items-center">
                  {" "}
                  <span
                    className={`grid items-center justify-center border-gray border  w-4 h-4 md:h-5 md:w-5 rounded-sm ${
                      storageCheckedBoxes ? `bg-purplishBlue border-none` : ``
                    } `}
                  >
                    <FaCheck
                      className={` h-3 w-3  ${
                        storageCheckedBoxes ? `text-white` : `text-transparent`
                      }`}
                    />
                  </span>
                  <div className="">
                    <h3 className="text-marineBlue text-sm md:text-base font-semibold">
                      Larger storage
                    </h3>
                    <h2 className="text-gray text-sm md:text-base">
                      Extra 1TB of cloud save
                    </h2>
                  </div>
                </div>
                <div className="">
                  {category ? (
                    <PriceYearStorageProf />
                  ) : (
                    <PriceMonthStorageProf />
                  )}
                </div>
              </label>
            </div>
            <div className="relative ">
              <input
                type="checkbox"
                id="profile"
                value={profileCheckedBoxes}
                name="profile"
                className="absolute invisible  checkbox"
                checked={profileCheckedBoxes}
                onChange={handleSetProfileCheckedBoxes}
              />

              <label
                htmlFor="profile"
                className="flex items-center justify-between  border rounded-md border-gray hover:border-marineBlue duration-200   p-3 md:p-4 gap-4"
              >
                <div className="flex gap-4 items-center">
                  {" "}
                  <span
                    className={`grid items-center justify-center border-gray border  w-4 h-4 md:w-5 md:h-5 rounded-sm ${
                      profileCheckedBoxes ? `bg-purplishBlue border-none` : ``
                    } `}
                  >
                    <FaCheck
                      className={` h-3 w-3  ${
                        profileCheckedBoxes ? `text-white` : `text-transparent`
                      }`}
                    />
                  </span>
                  <div className="">
                    <h3 className="text-marineBlue  font-semibold text-sm md:text-base">
                      Customizable profile
                    </h3>
                    <h2 className="text-gray text-sm md:text-base">
                      Custom theme on your profile
                    </h2>
                  </div>
                </div>
                <div className="">
                  {category ? (
                    <PriceYearStorageProf />
                  ) : (
                    <PriceMonthStorageProf />
                  )}
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
