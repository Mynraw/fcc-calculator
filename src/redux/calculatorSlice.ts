import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        operator: "",
        currentValue: "",
        accumulatedValue: "",
    },
    reducers: {
        getOperation: (state, action) => {
            state.accumulatedValue += state.currentValue;
            state.operator = action.payload;
            state.currentValue = "";
        },
        getCurrentValue: (state, action) => {
            state.currentValue += action.payload;
        },
        nullDigit: (state, action) => {
            state.accumulatedValue = action.payload;
        },
        resetValues: (state) => {
            state.currentValue = "";
            state.operator = "";
            state.accumulatedValue = "";
        }
    }
});

export const {getOperation, getCurrentValue, resetValues, nullDigit} = calculatorSlice.actions;
export default calculatorSlice.reducer;
