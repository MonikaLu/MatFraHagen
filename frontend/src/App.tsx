import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    return !!accessToken;
  };

  return (
    <>
      <h1 className="text-2xl font-bold underline">Mat Fra Hagen!!</h1>

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
        <h2 className="p-4 text-center">LOGO</h2>
        <h1 className="p-4 text-center">Mat Fra Hagen</h1>
        <Link
          to="/login"
          className="bg-button text-buttonText p-4 text-center ml-auto"
        >
          Logg inn
        </Link>
      </div>
      <div className="">Søk etter område</div>
      <div>Her kommer view av annonser</div>
    </>
  );
}

export default App;
