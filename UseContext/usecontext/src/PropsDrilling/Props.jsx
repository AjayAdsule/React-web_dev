import React, { createContext, useState} from "react";
import { Data } from "../Data";

const PersonContext = createContext(); //two component provider and consumer

const Props = () => {
  const [people,setPeople] =useState(Data) ;
    const removePerson=(id)=>{
        const newPerson= people.filter((people)=>{
            return people.id!==id;
        })
        setPeople(newPerson)
        console.log('remove ');
    }

  return (
    <React.Fragment>
      <PersonContext.Provider value={{removePerson,people}} >
        <h1 style={{ textAlign: "center" }}>Props Drilling</h1>
        <Products  />
      </PersonContext.Provider>
    </React.Fragment>
  );
};

const Products = () => {
    const MainData=React.useContext(PersonContext) // if you want whole data of context you can use this method
    console.log(MainData);
  return (
    <React.Fragment>
      {MainData.people.map((item) => {
        return (
          <SingleProduct key={item.id} {...item}  />
        );
      })}
    </React.Fragment>
  );
};

const SingleProduct = ({ id, name }) => {
    const {removePerson}=React.useContext(PersonContext); //if you can only want specific data you can use this syntax
   
  return (
    <React.Fragment>
      <div className="item">
        <p>{name}</p>
        <button onClick={()=>removePerson(id)} >click</button>
      </div>
    </React.Fragment>
  );
};

export default Props;
