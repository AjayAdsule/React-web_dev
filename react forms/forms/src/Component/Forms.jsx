import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { id: new Date().getTime().toString(), name, email };
    setPeople((people) => {
      return [...people, person];
    });
    console.log(people);
    setEmail("");
    setName("");
  };
  
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </article>
      {people.map((items) => {
        const {id,name,email}=items
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Forms;
