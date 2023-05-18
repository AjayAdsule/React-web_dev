import React from "react";
import Props from "./Day2/Props";
import ObjProps from "./Day2/ObjProps";

const App = () => {
  return (
    <React.Fragment>
      <h1>Hello React</h1>
      {/* <Props price="499" /> */}
      <ObjProps title={FirstBook.title} author={FirsBook.author} image={FirstBook.img}/>
    </React.Fragment>
  );
};

export default App;
