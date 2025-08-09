import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ServiceDetails from "./components/ServiceDetails";
import Home from "./components/Home";
import DoorstepLaundry from "./components/DoorstepLaundry";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doorstep-loundry" element={<DoorstepLaundry />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/our-services/:name" element={<ServiceDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
