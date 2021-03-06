import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import IconCard from "./IconCard";

const Social = () => {
  const linkLinkedIn = "https://in.preetham.net";
  const linkGitHub = "https://git.preetham.net";

  return (
    <div className="slide container portfolio f-sourcecode">
      <h1 className="mb-5">Find more about me @</h1>

      <div className="d-flex">
        <IconCard
          icon={<FontAwesomeIcon icon={faLinkedin} size="4x" />}
          link={linkLinkedIn}
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faGitSquare} size="4x" />}
          link={linkGitHub}
        />
      </div>
    </div>
  );
};

export default Social;
