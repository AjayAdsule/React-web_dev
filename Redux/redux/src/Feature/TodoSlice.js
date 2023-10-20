import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo:[{ id: 1, task: "Hello world" }]
};


export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTask={id:nanoid(),task:action.payload}
            state.todo.push(newTask)
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter((task)=> task.id !==action.payload)
        }
    }
})

// you want to export all function from todoslice

export const  {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer