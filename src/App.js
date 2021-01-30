import "./App.css";
import MenuAppBar from "./Component/Appbar/MenuAppBar";
import Footer from "./Component/Footer/Footer";
import FirstBody from "./UI/Body/FirstBody";
import FourthBody from "./UI/Body/FourthBody/FourthBody";
import SecondBody from "./UI/Body/SecondBody/SecondBody";
import ThirdBody from "./UI/Body/ThirdBody/ThirdBody";
import BodyMainSlider from "./UI/BodyMainSlider/BodyMainSlider";
import MainSecBody from "./UI/MainSecBody/MainSecBody";
import SlidingCompo from "./UI/SlidingCompo/SlidingCompo";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <FirstBody />
      <SlidingCompo />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <MainSecBody />
      <Footer />
    </div>
  );
}

export default App;
