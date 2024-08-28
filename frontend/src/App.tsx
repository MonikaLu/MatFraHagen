import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className="flex">
        <h2 className="p-4 text-center">LOGO</h2> 
        <h1 className="p-4 text-center">Mat Fra Hagen</h1>
        <button onClick={increment} className="bg-button text-buttonText p-4 text-center ml-auto">Logg inn ({count})</button>
      </div>
      <div className="">Søk etter område</div>
      <div>Her kommer view av annonser</div>
    </>
  );
}

export default App;
