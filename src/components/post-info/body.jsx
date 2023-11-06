import { CardBody, CardTitle } from "react-bootstrap";
import { useUser } from "../../context/UserContext";

export const PostBody = () => {

  const user = useUser();

  return (
    <CardBody>
      <CardTitle>{user.username}</CardTitle>
      <CardBody>my apples...</CardBody>
    </CardBody>
  );
};
