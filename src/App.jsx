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

  return (
    <>
      <div className="bg-alabaster md:bg-white mt-0  shadow-lg w-full mx-auto md:flex md:gap-x-12 md:w-5/6 lg:w-full md:h-[35rem]  md:items-start rounded-md relative md:p-4 min-h-[100vh]">
        <Buttons button={pages} value={value} setValue={setValue} />

        <div className="w-full bg-purple-500 h-1/4 md:h-full md:static absolute  md:w-2/5  md:rounded-md ">
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
        <div className="md:flex md:flex-col md:mt-6 md:h-4/5  md:w-3/4 md:gap-y-10 pr-10 ">
          <Pages pager={pages} value={value} />
          <Footer footBtn={pages} value={value} setValue={setValue} />
        </div>
      </div>
    </>
  );
}

export default App;
