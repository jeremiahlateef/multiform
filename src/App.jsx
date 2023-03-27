import { useState } from "react";
import "./App.css";
import data from "./data";
import mobileBg from "./images/bg-sidebar-mobile.svg";
import desktopBg from "./images/bg-sidebar-desktop.svg";

function App() {
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(data);
  return (
    <>
      <div className="bg-white mt-0 md:my-auto shadow-lg w-full mx-auto md:flex md:gap-x-12 md:w-4/5 md:h-[40rem]  md:items-start rounded-md h-screen relative md:p-4 ">
        <div className="w-full bg-purple-500 h-1/4 md:h-full lg:w-1/4 md:w-2/5  md:rounded-md ">
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
        <div
          className="md:flex md:flex-col md:justify-between md:mt-6 md:h-4/5  md:w-2/3"
          style={{ height: "30rem" }}
        >
          <div className="bg-green-300 shadow-lg w-4/5 mx-auto rounded-md top-28   absolute left-1/2 transform -translate-x-1/2 z-10 md:static md:translate-x-0 md:translate-y-0  md:shadow-none md:w-full">
            <p className="text-center w-full mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quia veniam quos mollitia nesciunt aspernatur incidunt culpa
              numquam! Accusantium, officia commodi. Quos voluptatibus dolore
              ab, atque odit et reprehenderit illum?
            </p>
          </div>
          <footer className="bg-red-300 absolute md:relative md:bottom-auto bottom-0 h-16 w-full md:mx-auto right-0 md:w-full">
            <button className="bg-blue-400 p-3 mx-auto transform -translate-y-1/2 top-1/2 rounded absolute md:right-0 right-6">
              Next Step
            </button>
            <button className="bg-blue-400 p-3 mx-auto transform -translate-y-1/2 top-1/2 rounded absolute md:left-0 left-6">
              Next Step
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

{
  /* {pages.map((pager) => {
        const { id, page } = pager;
        return <div key={id}>{page()}</div>;
      })} */
}
export default App;
