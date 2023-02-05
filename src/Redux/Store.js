import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './Action/slice'
const store = configureStore({
    reducer : 
    {
        data : dataReducer
    }}
);

export default store;