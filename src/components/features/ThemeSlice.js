import {createSlice} from "@reduxjs/toolkit"
const ThemeSlice=createSlice({
    name:"theme_mode",
    initialState:{
        loading:"idle",
        mode:"light"
    },
    reducers:{
        toggle_theme(state){
            state.mode=state.mode==="light"?"dark":"light"
        }
    }
})

export const {toggle_theme}=ThemeSlice.actions
export default ThemeSlice.reducer