import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  }); // create person object
  const [people, setPeople] = useState([]); //create people array in which store all the person object in form of array of object
  const handleSubmit = (e) => {
    e.preventDefault(); //it will prevent browser to not refreshing the page
    const newPerson = { ...person, id: new Date().getTime().toString() }; // create new object in that i create a id which give unique value and copy all person object
    setPeople([...people, newPerson]); // copy all object and set in people array
    setPerson({ name: "", email: "", mobile: "", password: "" });
    console.log(people);
  };

  const handleChange = (e) => {
    const name = e.target.name; // name grabs (name,email,password...)
    const value = e.target.value; //value grabs user input
    setPerson({ ...person, [name]: value }); // it work like [{name:''}] -> [{name:'userInput}] ...person will copy all the object
  };
  // this function is removing list
  const handleRemove = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="mobile">Mobile :</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={person.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </article>
      {people.map((item) => {
        const { id, name, email, mobile } = item;
        return (
          <div className="item" key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{mobile}</p>
            <button className="btn" onClick={() => handleRemove(id)}>
              click
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default MultipleInputs;
