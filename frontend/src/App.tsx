import "./App.css";
import AdGrid from "./components/AdGrid";

function App() {
  return (
    <>
      <div className="flex">
        <h2 className="p-4 text-center">LOGO</h2>
        <h1 className="p-4 text-center">Mat Fra Hagen</h1>
        <button className="bg-button text-buttonText p-3 text-center ml-auto text-paragraph1 rounded-md">
          Logg inn
        </button>
      </div>
      <div className="">Søk etter område</div>
      <AdGrid />
    </>
  );
}

export default App;
