import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faNodeJs,
  faReact,
  faAndroid,
  faAngular,
  faPhp,
  faPython,
  faSymfony,
  faGitAlt,
  faAws,
  faDocker,
  faMailchimp,
  faSourcetree,
  faUbuntu,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import IconCard from "./IconCard";

const LoveStacks = () => {
  return (
    <div className="slide container portfolio f-sourcecode">
      <h1 className="mb-5">Technologies I have a passion for...</h1>

      <Card className="bg-transparent border-primary text-center">
        <Card.Header>
          <h4>MEAN Stack</h4>
        </Card.Header>
        <Card.Body className="d-flex">
          <IconCard icon={<FontAwesomeIcon icon={faReact} size="4x" />} />
          <IconCard icon={<FontAwesomeIcon icon={faNodeJs} size="4x" />} />
          <IconCard icon={<FontAwesomeIcon icon={faDatabase} size="4x" />} />
        </Card.Body>
      </Card>
    </div>
  );
};

const AlsoStacks = () => {
  return (
    <div className="slide container f-sourcecode">
      <h1 className="mb-5">I am also familiar with...</h1>

      <div className="d-flex">
        <IconCard icon={<FontAwesomeIcon icon={faAndroid} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faAngular} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faPython} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faPhp} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faSymfony} size="4x" />} />
      </div>
    </div>
  );
};

const ToolsStacks = () => {
  return (
    <div className="slide container f-sourcecode">
      <h1 className="mb-5">Tools I'm good at...</h1>

      <div className="d-flex">
        <IconCard icon={<FontAwesomeIcon icon={faAws} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faUbuntu} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faDocker} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faMailchimp} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faSourcetree} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faGitAlt} size="4x" />} />
        <IconCard icon={<FontAwesomeIcon icon={faBootstrap} size="4x" />} />
      </div>
    </div>
  );
};

export { LoveStacks, AlsoStacks, ToolsStacks };
