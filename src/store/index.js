import {configureStore} from "@reduxjs/toolkit";

import calculatorReducers from "../reducers/calculatorReducers";
export const store = configureStore({
    reducer: {
        calculator: calculatorReducers
    },
    devTools:true,
})