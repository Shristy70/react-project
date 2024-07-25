import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";
const Search = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const handelsearch = () => {
    let url = `http://localhost:3000/data/?id=${id}`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  let ans = data.map((key) => {
    return (
      <>
        <tr>
          <td>{key.id}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handelsearch}>click</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th> Name</th>
            <th>city</th>
            <th>fees</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};
export default Search;
