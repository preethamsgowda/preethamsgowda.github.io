import { Card } from "react-bootstrap";
import IconCard from "./IconCard";

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

import "./../css/Stacks.css";

const LoveStacks = () => {
  return (
    <div className="slide container f-sourcecode flex-sm-row">
      <h5 className="mb-5 mb-sm-0">
        Technologies I am passionate to work on...
      </h5>

      <Card className="bg-transparent border-primary text-center">
        <Card.Header className="border-0">
          <h6>MERN Stack</h6>
        </Card.Header>
        <Card.Body className="d-flex justify-content-around align-items-center flex-wrap">
          <IconCard
            icon={<FontAwesomeIcon icon={faReact} className="h1" />}
            tooltipText="React"
          />
          <IconCard
            icon={<FontAwesomeIcon icon={faNodeJs} className="h1" />}
            tooltipText="Node Js"
          />
          <IconCard
            icon={<FontAwesomeIcon icon={faDatabase} className="h1" />}
            tooltipText="Mongo DB / MySQL"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

const AlsoStacks = () => {
  return (
    <div className="slide container f-sourcecode flex-sm-row">
      <h5 className="mb-5 mb-sm-0">I am also familiar with...</h5>

      <div className="d-flex flex-row justify-content-around align-items-center flex-wrap">
        <IconCard
          icon={<FontAwesomeIcon icon={faAndroid} className="h1" />}
          tooltipText="Android"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faAngular} className="h1" />}
          tooltipText="Angular"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faPython} className="h1" />}
          tooltipText="Python"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faPhp} className="h1" />}
          tooltipText="php"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faSymfony} className="h1" />}
          tooltipText="Symfony"
        />
      </div>
    </div>
  );
};

const ToolsStacks = () => {
  return (
    <div className="slide container f-sourcecode flex-sm-row">
      <h5 className="mb-5 mb-sm-0">Tools I'm good at...</h5>

      <div className="d-flex flex-row justify-content-around align-items-center flex-wrap">
        <IconCard
          icon={<FontAwesomeIcon icon={faAws} className="h1" />}
          tooltipText="AWS"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faUbuntu} className="h1" />}
          tooltipText="Ubuntu"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faDocker} className="h1" />}
          tooltipText="Docker"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faMailchimp} className="h1" />}
          tooltipText="MailChimp"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faSourcetree} className="h1" />}
          tooltipText="SourceTree"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faGitAlt} className="h1" />}
          tooltipText="Git"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faBootstrap} className="h1" />}
          tooltipText="Bootstrap"
        />
      </div>
    </div>
  );
};

export { LoveStacks, AlsoStacks, ToolsStacks };
