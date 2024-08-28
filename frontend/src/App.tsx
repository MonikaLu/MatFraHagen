import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ConfirmUserPage from "./ConfirmUserPage";
import Home from "./Home";
import Login from "./Login";

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
          <Route path="/confirm" element={<ConfirmUserPage />} />
          <Route
            path="/home"
            element={
              isAuthenticated() ? <Home /> : <Navigate replace to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
