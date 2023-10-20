import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/TodoSlice"; // we are export default so we can give any name
export const store = configureStore({
    reducer:todoReducer
});
// first step to create a store you can create a file and add store you can create anywhere a store file it's depend on you
