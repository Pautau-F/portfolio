import LightSide from "../img/jedi_order.png";
import DarkSide from "../img/empire_order.png";
import ProfilePicture from "../img/profilePicture.png";
import "../styles/sideChoice.css";

const SideChoice = (props) => {
  const { setCurrentTheme } = props
  // TODO: Faire en sorte de scroller au prochain bloc (introduction) lorsque l'utilisateur choisi son alignement
  return (
    <header className="block sideChoice">
      <div className="border"></div>
      <div className="darkSide side"
        onClick={(event) => setCurrentTheme("dark")}
        >
        <img src={DarkSide} alt="darkSide" />
      </div>
      <div className="lightSide side"
        onClick={(event) => setCurrentTheme("light")}
        >
        <img src={LightSide} alt="lightSide" />
      </div>
      <aside className="box code">
        <img src={ProfilePicture} alt="darkSide" />
        <h1 className="sideTitle">Florian Caron</h1>
      </aside>

      <p className="sideInfo box absCenterHorizontally">
        It will have an impact on the UI's color.
      </p>
      <p className="sideDisclaimer box code absCenterHorizontally">
        This website is under construction.
      </p>
    </header>
  );
};

export default SideChoice;
