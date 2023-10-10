import { createSlice } from "@reduxjs/toolkit";

const initialState = 'PT'

const linguagemSlice = createSlice({
    initialState,
    name: 'Linguagem',
    reducers: {
        mudaLinguagem: (state, {payload}) => payload
    }
})

export const { mudaLinguagem } = linguagemSlice.actions 

export default linguagemSlice.reducer