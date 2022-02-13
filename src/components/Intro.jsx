import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="block intro">
      <h2 className="introTitle box absCenterHorizontally code">// Introduction </h2>
      <div className="introDescription box">
        <div>
          <h3 className="code">// Current situation</h3>
          <p>
            I am currently in apprenticeship until September 20th 2023 therefore I am not looking for a job at the moment.
          </p>
        </div>
      </div>
      
      {/* <div className="introBlockA introBlock">
        <div className="introText">
          <p>Lorel ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </div> */}
    </div>
  );
};

export default Intro;
