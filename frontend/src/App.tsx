import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import AdGrid from "./components/AdGrid";
import Button from "./ui/Button";

function App() {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    return !!accessToken;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate replace to="/home" />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>
      <div className="flex">
        <img src="./public/logo-color.png" className="w-48" alt="logo"></img>
        <Link to="/login" className="ml-auto">
          <Button btnText={"Logg inn"} />
        </Link>
      </div>
      <div className="">Søk etter område</div>
      <AdGrid />
    </>
  );
}

export default App;
