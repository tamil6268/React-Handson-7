import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice(
    {
        name : 'dataSlice',
        initialState : [{ name: 'name1', age: 21,course:"MERN" ,batch:"September"}, 
        { name: 'name2',age: 24,course:"MERN" ,batch:"August"}],
        reducers :
        {
            editData : (state,action)=>{
            //    console.log(action.payload);
                state[action.payload.index] = action.payload.newObj;
                return (state) //  updated prevObj is the new state 
            },
            addData : (state,action)=>{
                state[action.payload.index] = action.payload.newObj;
                return (state) //  updated prevObj is the new state 
            }    
        }
    }
);

export const {editData,addData} = dataSlice.actions;
export default dataSlice.reducer; 