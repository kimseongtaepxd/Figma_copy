import "./App.css";
import { useState } from "react";
import Header from "./component/Header.js";
import Top from "./component/Top.js";
import Info from "./component/Info.js";
import Roles from "./component/Roles.js";
import Become from "./component/Become.js";
import Partners from "./component/Partners.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Info />
        <Roles />
        <Become />
        <Partners />
      </main>
    </>
  );
}

export default App;
