import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Display = () => {
  const [data, setData] = useState([]);
  const loaddata = () => {
    let url = "http://localhost:3000/data";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    loaddata();
  }, []);
  
  let ans = data.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
    )
  })
  return (
    <>
      <h1>this is Display page</h1><hr />
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>city</th>
          <th>fees</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
      
    </>
  );
};
export default Display;
