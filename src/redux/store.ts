import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "@component/redux/calculatorSlice";

export default configureStore({
    reducer: {
        calculator: calculatorSlice,
    }
});
