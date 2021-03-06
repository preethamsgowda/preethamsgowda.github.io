import { Card } from "react-bootstrap";
import classNames from "classnames";

const IconCard = props => {
  function takeToLink(e) {
    console.log("props: ", props);
    if (props.link) {
      window.location.href = props.link;
    }
  }

  return (
    <Card
      className={classNames({
        "bg-transparent": true,
        "border-primary": true,
        "ml-1": true,
        "mr-1": true,
        link: props.link ? true : false,
      })}
      onClick={takeToLink}
    >
      <Card.Header>{props.icon}</Card.Header>
    </Card>
  );
};

export default IconCard;
