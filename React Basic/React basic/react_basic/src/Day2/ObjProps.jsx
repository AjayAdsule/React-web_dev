import React from 'react'

const ObjProps = (props) => {
    const FirstBook={
        title:"The Hunger Games",
        author:"Suzanne Collins",
        img:"https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL600_SR600,400_.jpg"
    }
    const SecondBook={
        title:"The Hunger Games",
        author:"Suzanne Collins",
        img:"https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL600_SR600,400_.jpg"
    }
  return (
    <React.Fragment>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
    </React.Fragment>
  )
}

export default ObjProps
