import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ConfirmUserPage from "./ConfirmUserPage";
import Home from "./Home";
import Login from "./Login";
import LogOut from "./LogOut";

function App() {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    return !!accessToken;
  };
  return (
    <>
      <h1 className="text-2xl font-bold underline">Mat Fra Hagen!!</h1>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated() ? (
                <Navigate replace to="/home" />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/confirm" element={<ConfirmUserPage />} />
          <Route
            path="/home"
            element={
              isAuthenticated() ? <Home /> : <Navigate replace to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
      <div className="flex">
        <h2 className="p-4 text-center">LOGO</h2>
        <h1 className="p-4 text-center">Mat Fra Hagen</h1>
        <button className="bg-button text-buttonText p-4 text-center ml-auto">
          Logg inn
        </button>
      </div>
      <div className="">Søk etter område</div>
      <div>Her kommer view av annonser</div>
    </>
  );
}

export default App;
