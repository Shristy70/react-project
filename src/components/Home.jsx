import { useState, useEffect } from "react";
const Home = () => {
  const [data, setData] = useState(0);
  const [mul, setMul] = useState(0);
  useEffect(() => {
    setMul(data * 2);
  }, [data]);
  return (
    <>
      <h3>this is home page</h3>
      <h1> counter : {data}</h1>
      <h2>multification : {mul}</h2>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        increase
      </button>
    </>
  );
};
export default Home;
