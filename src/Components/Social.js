import IconCard from "./IconCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  const linkLinkedIn = "https://in.preetham.net";
  const linkGitHub = "https://git.preetham.net";

  return (
    <div className="slide container f-sourcecode flex-sm-row">
      <h5 className="mb-5 mb-sm-0">Find more about me @</h5>

      <div className="d-flex flex-row justify-content-around align-items-center flex-wrap">
        <IconCard
          icon={<FontAwesomeIcon icon={faLinkedin} className="h1" />}
          link={linkLinkedIn}
          tooltipText="My LinkedIn Profile."
        />
        /
        <IconCard
          icon={<FontAwesomeIcon icon={faGitSquare} className="h1" />}
          link={linkGitHub}
          tooltipText="My GitHub Repo."
        />
      </div>
    </div>
  );
};

export default Social;
