import Header from "./components/Header";
import Footer from "./components/Footer";
import DoorstepLaundry from "./components/DoorstepLaundry";
import GetInTouch from "./components/GetInTouch";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <DoorstepLaundry />
      <WhyChooseUs />
      <OurServices />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
