import React, { useState, useReducer } from "react";
import { Data } from "./Data";
import Modal from "./UseReducer/Modal";

const reducerFunction = (state, action) => {
  if (action.type === "test") {
    const newItems = [...state.people, action.payLoad];

    return {
      ...state,
      modalOpen: "true",
      modalContent: "item added",
      modalTextColor: "green",
      people: newItems,
    };
  }
  if (action.type === "noValue") {
    return {
      ...state,
      modalContent: "please add item",
      modalTextColor: "red",
    };
  }
  if (action.type === "remove") {
    const filterItems = state.people.filter(
      (item) => item.id !== action.payLoad
    );
    return {
      ...state,
      people: filterItems,
    };
  }
  return state;
};
const initialValue = {
  modalOpen: false,
  people: Data,
  modalContent: "Hello Modal",
  modalTextColor: "green",
};

const DupApp = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducerFunction, initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch({ type: "test", payLoad: newItem });
    } else {
      dispatch({ type: "noValue" });
    }
    setName("");
  };
  return (
    <React.Fragment>
      {state.modalOpen && (
        <Modal
          modalContent={state.modalContent}
          modalTextColor={state.modalTextColor}
        />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <p>{person.name}</p>
            <button
              onClick={() => dispatch({ type: "remove", payLoad: person.id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default DupApp;
