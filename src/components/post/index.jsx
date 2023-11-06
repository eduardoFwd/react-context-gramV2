import { Card, CardBody, CardHeader, CardImg, CardTitle, Container } from "react-bootstrap";

export const Post = () => {

    return (
      <Container className="post">
        <Card>
          <CardHeader>
            <CardImg
              src="https://discourse.disneyheroesgame.com/uploads/default/original/3X/e/8/e8b4cd21287dfa781e1cd50caac05b8bd4baf4e1.png"
              className="post-avatar rounded-3"
              style={{width: '80px'}}
            >  
            </CardImg>
            <strong>JP</strong> 
          </CardHeader>
          <Card.Img src="https://cdn.pixabay.com/photo/2023/10/10/14/55/apples-8306677_960_720.jpg"></Card.Img>
          <CardBody>
            <CardTitle>JP</CardTitle>
            <CardBody>my apples...</CardBody>
          </CardBody>
        </Card>
      </Container>
    );
}