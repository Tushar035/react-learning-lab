import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", name);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    console.log(name);
    setName(e.target.value);
    if (e.target.value.length < 6) {
      setError(`${e.target.value} must be at least 6 characters`);
    } else {
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    console.log(email);
    setEmail(e.target.value);
    if (e.target.value.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name :</label>
      <input type="text" value={name} onChange={handleNameChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
      <label>Email :</label>
      <input value={email} onChange={handleEmailChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default MyForm;
