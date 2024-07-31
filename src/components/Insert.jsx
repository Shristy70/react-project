import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [input, setInput] = useState({});
  const handelChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handelClick = (e) => {
    e.preventDefault();
    let url = "http://localhost:3000/data";
    axios
      .post(url, input)
      .then((res) => {
        console.log(res.data);
        alert("data insert");
      })
      .catch((err) => {
        alert("errror");
      });
  };
  return (
    <>
      <Form>
       

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>id</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={input.id}
            placeholder="enter a id"
            onChange={handelChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            value={input.name}
            onChange={handelChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter city"
            name="city"
            value={input.city}
            onChange={handelChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>fees</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter pass"
            name="enter fees"
            value={input.fees}
            onChange={handelChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handelClick}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Insert;
