import headshot from "./../Images/headshot.jpg";
import Typewriter from "typewriter-effect";

import "./../css/Intro.css";

const Intro = () => {
  return (
    <div className="slide container f-sourcecode">
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className="my-greeting mb-5">
          <h4>Hi there,</h4>
          <h3>I'm Preetham.</h3>
        </div>
        <div className="my-avatar mb-5 ml-sm-5 ">
          <img
            src={headshot}
            alt="headshot"
            className="avatar-xl border-solid-2"
          />
        </div>
      </div>
      <h6 className="d-flex">
        A Software&nbsp;
        <Typewriter
          options={{
            strings: ["Programmer.", "Developer..", "Engineer..."],
            autoStart: true,
            loop: true,
          }}
          ml-2
        />
      </h6>
    </div>
  );
};

export default Intro;
