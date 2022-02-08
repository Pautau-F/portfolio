import LightSide from "../img/jedi_order.png";
import DarkSide from "../img/empire_order.png";

const SideChoice = () => {
  return (
    <header className="block sideChoice">
      <div className="border"></div>
      <div className="darkSide side">
        <img src={DarkSide} alt="darkSide" />
      </div>
      <div className="lightSide side">
        <img src={LightSide} alt="lightSide" />
      </div>
      <h1 className="sideTitle code">Florian Caron</h1>
      <p className="sideInfo absCenterHorizontally"> It will have an impact on the UI's color. </p>
      <p className="sideDisclaimer code absCenterHorizontally"> This website is under construction. </p>
    </header>
  );
};

export default SideChoice;
