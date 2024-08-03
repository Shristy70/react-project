import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  return (
    <>
      <h1>Todo App :</h1>
      <Container>
        <Row>
          <Col sm>ITEMS</Col>
          <Col sm>DATE</Col>
          <Col sm>DELETE</Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
