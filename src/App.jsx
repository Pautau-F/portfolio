import "./App.css";
import { useState } from 'react';
import Nav from "./components/Nav";
import SideChoice from "./components/SideChoice";
import Intro from "./components/Intro";

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  return (
    <>
      <div className="app" data-theme={currentTheme}>
        <div className="frame"></div>
        <div className="background"></div>
        <Nav />
        <SideChoice setCurrentTheme={setCurrentTheme}/>
        <Intro />
      </div>
    </>
  );
}

export default App;
