import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";
import classNames from "classnames";

import "./../css/IconCard.css";

const IconCard = props => {
  const renderTooltip = settings => {
    return (
      <Tooltip id="button-tooltip" {...settings} className="warning">
        {props.tooltipText}
      </Tooltip>
    );
  };

  function takeToLink(e) {
    if (props.link) {
      window.open(props.link, "_blank");
    }
  }

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Card
        className={classNames({
          "bg-transparent": true,
          "sm-ml-1": true,
          "sm-mr-1": true,
          link: props.link ? true : false,
          "mt-1": true,
          "mb-1": true,
          "border-on-hover-1": true,
        })}
        onMouseDown={takeToLink}
      >
        <Card.Header>{props.icon}</Card.Header>
      </Card>
    </OverlayTrigger>
  );
};

export default IconCard;
