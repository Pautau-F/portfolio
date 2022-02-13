import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="block intro">
      <h2 className="title box code">// Introduction </h2>

        <div className="introBlock about box">
          <div className="introText">
            <h3 className="code">// About me</h3>
            <p>Greetings! I'm Florian and I'm developping since 2019 so it's just the beginning but I aim at being better everyday. <br /><br />
            What I love the most is messing around with JavaScript and CSS.
            </p>
          </div>
        </div>
     
      {/* <div className="introSituation box">
        <h3 className="code">// Current situation</h3>
        <p>
          I am currently in apprenticeship until September 20th 2023 therefore I am not looking for a job at the moment.
        </p>
      </div> */}
    </div>
  );
};

export default Intro;
