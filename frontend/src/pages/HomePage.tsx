import Header from "../components/Header";
import Logout from "../LogOut";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-between items-center m-2">
        <Logout />
      </div>
    </>
  );
};

export default HomePage;
