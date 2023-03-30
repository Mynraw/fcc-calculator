import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        operation: "",
        firstValue: 0,
        secondValue: 0,
        result: 0
    },
    reducers: {
        getOperation: (state, action) => {
            state.operation = action.payload;
        },
        getFirstValue: (state, action) => {
            state.firstValue = action.payload;
        },
        getSecondValue: (state, action) => {
            state.secondValue = action.payload;
        },
        calculate: (state) => {
            state.result = state.firstValue + Number(state.operation) + state.secondValue;
        },
    }
});

export const {getOperation, getFirstValue, getSecondValue, calculate} = calculatorSlice.actions;
export default calculatorSlice.reducer;
