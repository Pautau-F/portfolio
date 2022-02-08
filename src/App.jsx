import './App.css';
import Nav from './components/Nav';
import SideChoice from './components/SideChoice';
import Intro from './components/Intro';

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <Nav />
      <SideChoice />
      <Intro />
    </div>
  );
}

export default App;
