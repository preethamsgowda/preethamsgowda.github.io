import headshot from "./../Images/headshot.jpg";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="slide container f-sourcecode">
      <div className="my-greeting mb-5">
        <h3>Hi there,</h3>
        <h1>I'm Preetham.</h1>
      </div>
      <div className="my-avatar mb-5">
        <img src={headshot} alt="headshot" className="avatar-xl" />
      </div>
      <div className="my-intro">
        <h4 className="d-flex">
          A Software&nbsp;
          <Typewriter
            options={{
              strings: [" Programmer.", " Developer..", " Engineer..."],
              autoStart: true,
              loop: true,
            }}
            ml-2
          />
        </h4>
      </div>
    </div>
  );
};

export default Intro;
