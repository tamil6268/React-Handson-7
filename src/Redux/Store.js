import Reducer from "../Redux/Reducer/Tables";
import {configureStore} from "@reduxjs/toolkit"

const store  = configureStore({reducer: Reducer});

export default store;