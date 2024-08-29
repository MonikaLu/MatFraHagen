import Logout from "../LogOut";

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between items-center m-2">
      <h1>LOGO</h1>
      <h1 className="text-title1">Velkommen til MatFraHagen!</h1>
      <Logout />
    </div>
  );
};

export default HomePage;
