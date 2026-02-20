import React from 'react'

function Child(props) {
  return (
   <>
     <h4>
        your are {props.isOk ? "ok " : "text from child component passed to Layout component"}.
     </h4>
   </>
  )
}

export default Child;