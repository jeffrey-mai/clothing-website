import NavBar from "../components/NavBar";
import Homepage from "../components/Homepage";
import ToS from "../components/TermsOfService";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <Homepage />
      <ToS />
    </div>
  );
};

export default MainContainer;
