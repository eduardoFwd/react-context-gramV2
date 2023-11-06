import { Card, Container } from "react-bootstrap";
import { PostHeader } from "../post-header/header";
import { PostBody } from "../post-info/body";
import { PostPicture } from "../post-picture/picture";

export const Post = () => {

    return (
      <Container className="post">
        <Card>
          <PostHeader/>
          <PostPicture />
          <PostBody/>
        </Card>
      </Container>
    );
}