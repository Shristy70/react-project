import { useState } from "react";
const Contact = () => {
  const [cnt , setCnt] = useState(0);
  const incre=()=>{
    setCnt(cnt+10)
  }
  const decre=()=>{
    setCnt(cnt-10)
  }
  const reset = ()=>{
    setCnt(0)
  }
  return (
    <>
      <h1>this is counter</h1><hr />
      <h1> my count :{cnt}</h1><hr />
      <button onClick={incre}>increment</button> 
      <button onClick={decre}>decrement</button> 
      <button onClick={reset}>reset</button> 
    </>
  );
};
export default Contact;
