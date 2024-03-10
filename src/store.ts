import { configureStore } from "@reduxjs/toolkit";
import products from './Shop/product.slice'
import { useDispatch } from "react-redux";
const store = configureStore({
    reducer: {
        products
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
