import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
function Carousel1() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            src="public/hool.webp"
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Search your next room</h3>
            <p>find new and feature property located in you locality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="public/room1.jpg" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Search your next room</h3>
            <p>find new and feature property located in you locality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="public/img3.jpg" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Search your next room</h3>
            <p>find new and feature property located in you locality</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carousel1;
