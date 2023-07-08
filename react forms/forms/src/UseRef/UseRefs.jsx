import React,{useEffect, useRef} from "react";

const UseRefs = () => {
    const inputRef=useRef();
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(inputRef.current.value); //this method will give value 
    }
    useEffect(()=>{
        inputRef.current.focus();// this function will focus on input box
    },[])
  return (
    <React.Fragment>
      <article>
          <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name :</label>
          <input type="text" ref={inputRef} />
          <button className="btn" onClick={handleClick}>Click</button>
        </div>
          </form>
      </article>
    </React.Fragment>
  );
};

export default UseRefs;
