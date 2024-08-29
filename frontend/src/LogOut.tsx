import { useNavigate } from "react-router-dom";
import { signOut } from "./services/AuthService";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.log("Det oppstod en feil ved utlogging", error);
    }
  };

  return <button onClick={handleLogOut}>Logg ut</button>;
};

export default LogOut;
