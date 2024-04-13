import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from "./components/features/ThemeSlice"

const store = configureStore({
reducer:{theme:ThemeReducer}
})

export default store