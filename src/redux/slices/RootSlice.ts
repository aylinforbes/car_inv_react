import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        color: "Color",
        make: "Make",
        model: "Model",
        nickname: "Nickname"
    },
    reducers: {
        chooseColor: (state, action) => { state.color = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseNickname: (state, action) => { state.nickname = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseColor, chooseMake, chooseModel, chooseNickname} = rootSlice.actions