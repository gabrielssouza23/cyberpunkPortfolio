import { useState } from "react";
import presentation from "./assets/images/presentation.png";

import "./App.css";
import Buttons  from "./components/Buttons.jsx";
import AboutMe from "./components/aboutMe/AboutMe.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');</style>

      <div id="presentationFather">
        <div id="presentationDiv">
          <a href="#">
            <img id="presentation" src={presentation} className="logo" alt="" />
          </a>
        </div>
        <div id="presentationText">
          <h1 className="chakra-petch-semibold">WELCOME TO MY PORTFOLIO</h1>
        </div>
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
      

      <Buttons />


      
    </>
  );
}

export default App;
