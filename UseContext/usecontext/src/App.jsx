import React from "react";
import UsingReducer from "./UseReducer/UsingReducer";
import { Route, Routes } from "react-router-dom";
import UsingState from "./UseReducer/UsingState";
import Props from "./PropsDrilling/Props";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="state" element={<UsingState />} />
        <Route path="reducer" element={<UsingReducer />} />
        <Route path='props-drilling' element={<Props/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;
