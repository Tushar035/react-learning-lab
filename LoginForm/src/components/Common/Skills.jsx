import React from 'react'

function Skills(props) {
 const {skills} = props;
  return (
    <>
      <h2>Your skills are</h2>
      <ul>
        {skills.map(s=>(
            <li key = {s}>{s}</li>
        ))}
      </ul>
    </>
  )
}
export default Skills;