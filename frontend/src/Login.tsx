import { useState } from "react";
import { signIn, signUp } from "./services/AuthService";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import InputField from "./ui/InputField";

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
      <div className="flex flex-col justify-center items-center gap-y-5">
        <h4 className="text-title1">
          {isSignUp ? "Registrering:" : "Mat Fra Hagen"}
        </h4>
        <form
          onSubmit={isSignUp ? handleSignUp : handleSignIn}
          className="flex flex-col gap-y-5"
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
          <Button type="submit" btnText={isSignUp ? "Registrer" : "Logg inn"} />
        </form>
        <p
          className="text-buttonText hover:cursor-pointer underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Har du allerede en konto? Logg inn"
            : "Ingen konto? Registrer!"}
        </p>
      </div>
    </>
  );
};

export default Login;
