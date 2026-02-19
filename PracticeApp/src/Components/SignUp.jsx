import React, { useState } from "react";

function SignUp() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
     console.log(value)
    setPassword(value);

    if (value.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <>
      <input type="password" value={undefined} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default SignUp;