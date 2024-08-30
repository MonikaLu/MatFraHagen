import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <img src="./public/logo-color.png" className="w-48" alt="logo"></img>
        <div className="flex flex-row gap-x-5">
          <Link
            to="/aboutus"
            className="bg-tertiary text-buttonText p-4 text-center ml-auto"
          >
            Om Oss
          </Link>
          <Link
            to="/login"
            className="bg-tertiary text-buttonText p-4 text-center ml-auto"
          >
            Logg inn
          </Link>
        </div>
      </div>
    </>
  );
}
