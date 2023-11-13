import { useContext, useReducer } from "react";
import { CardBody, CardTitle, Button } from "react-bootstrap";
import { CardFooter, CardText } from "react-bootstrap/esm";
import FeedContext from "../../context/feed/FeedContext";

export const PostBody = ({ location, description, likes }) => {
  const initialState = { count: likes };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const {like,dislike} = useContext(FeedContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CardBody>
      <CardTitle>Location:{location}</CardTitle>
      <CardBody>description:{description}</CardBody>
      <CardFooter>
        <Button onClick={() => dispatch({ type: "increment" })}>
          <img src="../../images/me-gusta.png" width={"50px"} alt="Me gusta" />
        </Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          <img
            src="../../images/disgusto.png"
            width={"50px"}
            alt="No me gusta"
          />
        </Button>
        <CardText>{state.count}</CardText>
      </CardFooter>
    </CardBody>
  );
};
