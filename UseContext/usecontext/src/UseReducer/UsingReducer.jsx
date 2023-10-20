import React, { useState, useReducer } from "react";
import { Data } from "../Data";
import Modal from "./../UseReducer/Modal";

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
      modalOpen: "true",
    };
  }
  if (action.type === "remove") {
    const filterItems = state.people.filter(
      (item) => item.id !== action.payLoad
    );
    return {
      ...state,
      people: filterItems,
      modalContent: "Item remove ",
      modalTextColor: "black",
      modalOpen: true,
    };
  }
  if (action.type === "closeModal") {
    return {
      ...state,
      modalOpen: false,
    };
  }

  return state;
};
const initialValue = {
  modalOpen: true,
  people: Data,
  modalContent: "Use reducer",
  modalTextColor: "green",
};

const UsingReducer = () => {
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
  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };
  return (
    <React.Fragment>
      {state.modalOpen && (
        <Modal
          modalContent={state.modalContent}
          modalTextColor={state.modalTextColor}
          closeModal={closeModal}
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
        const {id,name}=person
        return (
          <div className="item" key={id}>
            <p>{name}</p>
            <button
              onClick={() => dispatch({ type: "remove", payLoad: id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default UsingReducer;
