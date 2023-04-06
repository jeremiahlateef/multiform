import { useState } from "react";
import "./App.css";
import data from "./data";
import mobileBg from "./images/bg-sidebar-mobile.svg";
import desktopBg from "./images/bg-sidebar-desktop.svg";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Pages from "./Pages";

function App() {
  const [pages, setPages] = useState(data);
  const [foots, footer] = useState([]);
  const [value, setValue] = useState(0);
  const [formValue, setFormValue] = useState(null);

  return (
    <>
      <div className="bg-alabaster md:bg-white mt-0  shadow-lg w-full mx-auto md:flex md:gap-x-12 md:w-5/6 lg:w-full  md:items-start rounded-md relative md:p-4 h-[100vh] md:h-[38rem]">
        <Buttons button={pages} value={value} setValue={setValue} />

        <div className="w-full h-1/4 md:h-full md:static absolute  md:w-[20rem]  md:rounded-md ">
          <img
            src={mobileBg}
            alt=""
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src={desktopBg}
            alt=""
            className="w-full hidden md:block h-full object-cover rounded-md"
          />
        </div>
        <div className="md:flex md:flex-col md:mt-6 md:w-[25rem] lg:w-[30rem] md:h-4/5  md:gap-y-10 pr-10 ">
          <Pages pager={pages} value={value} setFormValue={setFormValue} />
          <Footer
            footBtn={pages}
            value={value}
            setValue={setValue}
            setFormValue={setFormValue}
          />
        </div>
      </div>
    </>
  );
}

export default App;
