import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: '',
    result: ''
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        input: (state, action) => {
            state.input += action.payload;
        },
        clear: (state) => {
            state.input = '';
            state.result = '';
        },
        calculate: (state) => {
            try {
                const result = eval(state.input);
                state.result = Number.isFinite(result) ? result.toFixed(10) : 'Error';
            } catch (error) {
                state.result = 'Error';
            }
        },
        backspace: (state) => {
            state.input = state.input.slice(0, -1);
        }
    }
});

export const { input, clear, calculate, backspace } = calculatorSlice.actions;

export default calculatorSlice.reducer;
