import "./App.css";
import { useState } from 'react';
import Nav from "./components/Nav";
import SideChoice from "./components/SideChoice";
import Intro from "./components/Intro";

// TODO: Faire en sorte de scroller au prochain bloc (introduction) lorsque l'utilisateur choisi son alignement (sideChoice)
// TODO: Créditer les auteurs des images, trouver un endroit pour placer les crédits
function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  return (
    <>
      <div className="app" data-theme={currentTheme}>
        <div className="background"/>
        <Nav />
        <SideChoice setCurrentTheme={setCurrentTheme}/>
        <div className="divider"> 
          <h2 className="code box">PORTFOLIO UNDER CONSTRUCTION</h2>
        </div>
        <Intro />
      </div>
    </>
  );
}

export default App;
