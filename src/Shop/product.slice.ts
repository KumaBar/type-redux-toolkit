import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IProduct {
    id: string,
    title: string,
    price: number
}
export const initialState: IProduct[] = [
    { id: "apple", title: "Apple", price: 11110 },
    { id: "cs", title: "CS:GO", price: 149 },
    { id: "rak", title: "Dota2", price: 8 }
]

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.push(action.payload)
        },
        deleteProduct: (state, action: PayloadAction<IProduct>) => {
            return state.filter(product => product.id !== action.payload.id)
        }
    }
})
export const { addProduct, deleteProduct } = productsSlice.actions

export const getProductsSelector = (state: RootState) => state.products

export default productsSlice.reducer