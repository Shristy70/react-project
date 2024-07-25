import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values , [name]:value}))
    console.log(input);
  };
  const handleclick = () => {
    e.preventDefault();
    let url = "http://localhost:3000/data";
    axios.post(url,input).then((res)=>{
      alert("insert data");
      setInput({});

    }).catch((err)=>{
console.log(err);
alert("alert !!!");
    })
  }
  return (
    <>
      <h1>this is insert page</h1>
      <hr />
   
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id :</Form.Label>
        <Form.Control type="text" name="id" placeholder="Enter your id" value={input.id}onChange={handleChange} />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name :</Form.Label>
        <Form.Control type="text"  name="name"  placeholder="enter your name" value={input.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>city :</Form.Label>
        <Form.Control type="text" name="city"  placeholder="enter your city" value={input.city} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>fees :</Form.Label>
        <Form.Control type="text"  name="fees"  placeholder="enter your fees" value={input.fees} onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleclick}>
        Submit
      </Button>
    </Form>
    </>
  );
};
export default Insert;
