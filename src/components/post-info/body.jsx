import { useContext, useEffect, useReducer } from "react";
import { CardBody, CardTitle, Button } from "react-bootstrap";
import { CardFooter, CardText } from "react-bootstrap/esm";
import FeedContext from "../../context/feed/FeedContext";

export const PostBody = ({ location, description, countLikes }) => {

  const {likes,onLike,onDislike} = useContext(FeedContext);
  return (
    <CardBody>
      <CardTitle>Location:{location}</CardTitle>
      <CardBody>description:{description}</CardBody>
      <CardFooter>
        <Button onClick={() => onLike(countLikes)}>
          <img src="../../images/me-gusta.png" width={"50px"} alt="Me gusta" />
        </Button>
        <Button onClick={() => onDislike(countLikes)}>
          <img
            src="../../images/disgusto.png"
            width={"50px"}
            alt="No me gusta"
          />
        </Button>
        <CardText>{likes}</CardText>
      </CardFooter>
    </CardBody>
  );
};
