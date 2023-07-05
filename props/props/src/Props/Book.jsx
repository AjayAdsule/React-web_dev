import React from "react";

// this is main component
const books = [
  {
    name: "hindus",
    author: "ananad",
    price: 1255,
    img: "https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg",
  },
  {
    name: "The psychology of money",
    author: "k",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
    author: "mordan hausel",
  },
];

const BookList = () => {
    console.log(books);
  return (
    <div>
      <Book author={"anand"} heading={"hindus"} />
      <Book1 author={books.author} img={books.img} name={books.name}/>
      <Book1 author={books.author} img={books.img} name={books.name}/>
    </div>
  );
};

export default BookList;

// this is subcomponent where i am trying experiment on props
const Book = (props) => {
  let { heading, author } = props;
  return (
    <React.Fragment>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg"
        alt="mosttt"
      />
      <h1>{heading}</h1>
      <h2>{author}</h2>
    </React.Fragment>
  );
};

const Book1 = (props) => {
    let {img,author,name}=props
  return (
  <React.Fragment>
        <img src={img} alt="book" />
        <h1>{author}</h1>
        <p>{name}</p>
  </React.Fragment>
  )
};
