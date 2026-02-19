import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // render -> useEffect state change -> render
//   useEffect(() => {
//      console.log( "before changing state : ", count);
//      setCount((prevcount) => prevcount + 1); // -- > async call
//      console.log("Count changed:", count);
//     return()=>{
//         console.log("unmounted : " , count);
//     }
//   },[]);

//   useEffect(() => {
//   console.log("Count updated:", count);
// }, [count]);

//   useEffect(() => {
//     const handleClick = () => {
//       console.log("Page clicked!");
//     };

//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("click", handleClick);
//       console.log("Click listener removed");
//     };
//   }, [count]);

  useEffect(() => {
   console.log("Runs every time");
}, [{ name: "Tushar" }]);

  const increaseThreeTimes = () => {
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseThreeTimes}>increase by +3</button>
    </>
  );
}

export default Counter;
