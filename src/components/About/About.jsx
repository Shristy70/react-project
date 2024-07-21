import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-tittle">
        <h1>about me</h1>
        <div className="box"></div>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="./src/style/myy.jpg" alt="" id="myimg" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, in officia itaque nihil quisquam nisi consequuntur .
            </p>
            <p>
              hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p> JavaScript & React JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Backend</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>c++ , Data Structure</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>Fresher</h1>
          <p> willingness to work</p>
        </div>
        <hr />

        <div className="about-achivement">
          <h1>10+</h1>
          <p>projects</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>cybrom info.Ltd</h1>
          <p>intership Running</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default About;
