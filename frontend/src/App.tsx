import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AdGrid from "./components/AdGrid";
import Header from "./components/Header";

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
      <Header />

      <div className="">Søk etter område</div>
      <AdGrid />
    </>
  );
}

export default App;
