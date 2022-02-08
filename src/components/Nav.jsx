import '../styles/nav.css';
import LightSide from "../img/jedi_order.png";
import DarkSide from "../img/empire_order.png";

const Nav = () => {
  return (
    <nav> 

      <ul className="code">
        <li>       <img src={DarkSide} alt="darkSide" />Header</li>
        <li>      <img src={DarkSide} alt="darkSide" />Introduction</li>
        <li>      <img src={DarkSide} alt="darkSide" />Projects</li>
      </ul>
    </nav>
  )
  };

export default Nav;