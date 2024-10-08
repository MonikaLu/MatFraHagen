import { useState } from "react";
import { signIn, signUp } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import Header from "../components/Header";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const session = await signIn(email, password);
      if (session && typeof session.AccessToken !== "undefined") {
        sessionStorage.setItem("accessToken", session.AccessToken);
        if (sessionStorage.getItem("accessToken")) {
          window.location.href = "/home";
        } else {
          console.error("Session token was not set properly.");
        }
      } else {
        console.error("SignIn session or AccessToken is undefined.");
      }
    } catch (error) {
      alert(`Innlogging mislykket: ${error}`);
    }
  };

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passordene må være like.");
      return;
    }
    try {
      await signUp(email, username, password);
      navigate("/confirm", { state: { email } });
    } catch (error) {
      alert(`Problem med bekreftelse: ${error}`);
    }
  };
  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-title1 m-2">
            {isSignUp ? "Registrer en bruker" : "Logg inn"}
          </h1>
          <form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="flex flex-col gap-y-5 w-1/3"
          >
            <InputField
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />

            <InputField
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Brukernavn"
              required
            />

            <InputField
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {isSignUp && (
              <InputField
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Bekreft passord"
                required
              />
            )}
            <Button
              type="submit"
              btnText={isSignUp ? "Registrer" : "Logg inn"}
            />
          </form>
          <p
            className="text-buttonText hover:cursor-pointer hover:font-bold underline font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stroke dark:hover:bg-stroke dark:focus:ring-stroke"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Har du allerede en konto? Logg inn"
              : "Ingen konto? Registrer!"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
