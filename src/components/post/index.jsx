import { Card, Container } from "react-bootstrap";
import { PostHeader } from "../post-header/header";
import { PostBody } from "../post-info/body";
import { PostPicture } from "../post-picture/picture";

export const Post = (prop) => {
    const user = prop.user;

    return (
      <Container className="post">
        <Card>
          <PostHeader user={user}/>
          <PostPicture />
          <PostBody  user={user}/>
        </Card>
      </Container>
    );
}