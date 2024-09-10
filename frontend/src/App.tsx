import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AdGrid from "./components/AdGrid";
import Header from "./components/Header";
import useLoginStore from "./store/store";

function App() {
  const { setIsSignedIn, isSignedIn } = useLoginStore();
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    // setIsSignedIn(!!accessToken);
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
