import { CardBody, CardTitle } from "react-bootstrap";

export const PostBody = (prop) => {
  const user = prop.user;
  return (
    <CardBody>
      <CardTitle>{user.username}</CardTitle>
      <CardBody>my apples...</CardBody>
    </CardBody>
  );
};
