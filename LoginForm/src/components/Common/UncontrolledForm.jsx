import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Input Value: " + (inputRef.current.value+2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
