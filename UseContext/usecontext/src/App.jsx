import React, { useState } from "react";
import Modal from "./UseReducer/Modal";
import { Data } from "./../src/Data";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [people,setPeople]=useState(Data);
  const handleSubmit=(e)=>{
    e.preventDefault();
    // const newPersons={...people,id:new Date().getTime().toString(),name}
    // setPeople((people)=>{
    //   return [...people,newPersons]
    // }) // this method also works
    setPeople([...people,{id:new Date().getTime().toString(),name}])
    setName('')
    if(name){
      setShowModal(false)
    }else{
      setShowModal(true)
    }
  }
  
  return (
    <React.Fragment>
      {showModal && <Modal />}
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn">Submit</button>
        </form>
        {
          people.map((persons)=>{
            return(
              <div key={persons.id} className="item">
                  <p>{persons.name}</p>
              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  );
};

export default App;
