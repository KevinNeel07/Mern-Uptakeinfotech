import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import MainService from "./Components/Services/MainService";
import UiUx from "./Components/Services/UiUx";
import WebDev from "./Components/Services/WebDev";
import MobileDev from "./Components/Services/MobileDev";
import Project from "./Components/ProjectList/Project";
import Tiffin from "./Components/ProjectList/Tiffin";
import Trouvaille from "./Components/ProjectList/Trouvaille";
import RoughTurtle from "./Components/ProjectList/RoughTurtle";
import Brained from "./Components/ProjectList/Brained";
import Reacts from "./Components/Frontend/Reacts";
import Reactnative from "./Components/Frontend/Reactnative";
import Vue from "./Components/Frontend/Vue";
import Angular from "./Components/Frontend/Angular";
import Bootstrap from "./Components/Frontend/Bootstrap";
import Javascript from "./Components/Frontend/Javascript";
import Php from "./Components/Backend/Php";
import Laravel from "./Components/Backend/Laravel";
import Python from "./Components/Backend/Python";
import Node from "./Components/Backend/Node";
import Api from "./Components/Apis/Api";
import Hire from "./Components/Hiring/Hire";
import Contact from "./Components/Contact/Contact";
import ITconsulting from "./Components/Services/ITconsulting";
import { useEffect, useState } from "react";
import Loader from "./Components/LoadingPage/Loader";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            {/* service */}
            <Route exact path="/services" element={<MainService />} />
            <Route exact path="/uiux" element={<UiUx />} />
            <Route exact path="/webdev" element={<WebDev />} />
            <Route exact path="/mobile" element={<MobileDev />} />
            <Route exact path="/ITConsultancy" element={<ITconsulting />} />
            {/* end service */}
            {/* start project list */}
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/tiffinmom" element={<Tiffin />} />
            <Route exact path="/trouvaille" element={<Trouvaille />} />
            <Route exact path="/roughturtle" element={<RoughTurtle />} />
            <Route exact path="/brainEd" element={<Brained />} />
            {/* end project list */}
            {/* Programming Languages */}
            <Route exact path="/javascript" element={<Javascript />} />
            <Route exact path="/react" element={<Reacts />} />
            <Route exact path="/reactnative" element={<Reactnative />} />
            <Route exact path="/vue" element={<Vue />} />
            <Route exact path="/angular" element={<Angular />} />
            <Route exact path="/bootstrap" element={<Bootstrap />} />
            <Route exact path="/php" element={<Php />} />
            <Route exact path="/laravel" element={<Laravel />} />
            <Route exact path="/python" element={<Python />} />
            <Route exact path="/node" element={<Node />} />
            <Route exact path="/apis" element={<Api />} />
            {/* end Programming Languages */}
            <Route exact path="/hiring" element={<Hire />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
