import { configureStore } from "@reduxjs/toolkit";
import linguagemSlice from "./reducers/linguagem";

const store = configureStore({
    reducer: {
        linguagem: linguagemSlice
    }
})

export default store