import React from "react";

const Props = (props) => {
  console.log(props);
  const img =
    "https://m.media-amazon.com/images/I/71VvP7BZEFL._AC_UL600_FMwebp_QL65_.jpg";
  const title = "Manifesto";
  const author = "Karan_Bajaj";
  return (
    <React.Fragment>
      <img src={img} alt="book-image" />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{props.price}</p>
    </React.Fragment>
  );
};

export default Props;
