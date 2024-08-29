import { useNavigate } from "react-router-dom";
import { signOut } from "./services/AuthService";
import Button from "./ui/Button";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.log("Det oppstod en feil ved utlogging", error);
    }
  };

  return (
    <div className="w-28">
      <Button onClick={handleLogOut} btnText="Logg ut" />
    </div>
  );
};

export default Logout;
