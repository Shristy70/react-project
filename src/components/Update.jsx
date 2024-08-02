import axios from "axios";
import { useState ,useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Update = () => {
  const [data , setData] = useState([])
  const loaddata =()=>{
    let url = "http://localhost:3000/data"
    axios.get(url).then((res)=>{
    setData(res.data)
    })
  }
  useEffect(() => {
    loaddata()
  },[])
const mydel = (id)=>{
  let url = `http://localhost:3000/data/${id}`
  axios.delete(url).then((res)=>{
alert("delete")
loaddata();
  })
}
let ans = data.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.id}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
      <td><button onClick={()=>mydel(key.id)}>Delete</button></td>
    </tr>
    </>
  )
})
  return (
    <>
    <table striped bordered hover>
<thead>
  <tr>
    <th>Id</th>
    <th>name</th>
    <th>city</th>
    <th>fees</th>
    <th>Delete</th>
  </tr>


</thead>

    <tbody>
{ans}
</tbody>
</table>





      <h1>this is update page</h1>
     
      
        <div style={{border:"2px solid black",backgroundColor:"blue",width:"150px", height:"80px",borderRadius:"10px",textAlign:"center"}}>
         <div style={{border:"2px solid black",backgroundColor:"orange",marginTop:"15px", width:"130px",marginLeft:"7px",height:"50px",borderRadius:"10px"}}>
         <div style={{border:"2px solid black",backgroundColor:"red",margin:"auto",marginTop:"5px", width:"100px",borderRadius:"8px",marginTop:"10px"}}>         <div style={{textAlign:"center"}}>Cybrom</div>
        </div>
         </div>
         </div>
         

    </>
  );
};
export default Update;
