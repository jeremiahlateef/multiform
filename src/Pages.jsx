import React from "react";

const Pages = ({ pager, value, setFormValue }) => {
  // The pager selects the pages individually from the data[value].
  const { page } = pager[value];
  return (
    <div className="bg-white shadow-lg w-4/5 mx-auto rounded-md top-24 sm:top-28   absolute left-1/2 transform -translate-x-1/2 z-10 md:static md:translate-x-0 md:translate-y-0  md:shadow-none md:w-full md:px-0 px-4 py-6">
      {/* We must call the page since it was stored as a function. */}
      <div className=" w-full mx-auto">{page({ setFormValue })}</div>
    </div>
  );
};

export default Pages;
