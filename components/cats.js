import React from 'react'

function Cats (props) {
  return (
    <ul>
      {props.cats.map(function (cat, index) {
         return (
           <li key={index}>
             {cat.name}
           </li>
         )
       })}
    </ul>
  )
}

export default Cats
