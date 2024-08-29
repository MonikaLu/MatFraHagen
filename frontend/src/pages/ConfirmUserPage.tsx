import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { confirmSignUp } from "../services/AuthService";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

const ConfirmUserPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState(location.state?.username || "");
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await confirmSignUp(username, confirmationCode);
      alert("Kontoen er bekreftet!");
      navigate("/home");
    } catch (error) {
      alert(`Det oppstod en feil med bekreftelseskoden: ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h2 className="text-title1">Confirm Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <InputField
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <InputField
          type="text"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
          placeholder="Confirmation Code"
          required
        />
        <Button type="submit" btnText="Send" />
      </form>
    </div>
  );
};

export default ConfirmUserPage;
