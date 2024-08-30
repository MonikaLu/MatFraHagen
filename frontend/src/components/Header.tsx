import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Header() {
  return (
    <>
      <div className="flex">
        <img src="./public/logo-color.png" className="w-48" alt="logo"></img>
        <Link to="/login" className="ml-auto mt-10">
          <Button btnText={"Logg inn"} />
        </Link>
      </div>
    </>
  );
}
