import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(data);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline font-ubuntu">Hello world!</h1>
      {pages.map((pager) => {
        const { id, page } = pager;
        return <div key={id}>{page()}</div>;
      })}
    </div>
  );
}

export default App;
