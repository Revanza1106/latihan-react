import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Art Galery</Navbar.Brand>
          <Nav>
            <Nav.Link href="#ContentOne">F&B Logo</Nav.Link>
            <Nav.Link href="#ContentTwo">Financial Logo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
