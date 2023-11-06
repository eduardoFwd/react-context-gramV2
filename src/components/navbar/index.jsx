import { Container, Navbar } from "react-bootstrap";

export const NavHeader = () => {

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-ContexGram</Navbar.Brand>
        </Container>
      </Navbar>
    );
};