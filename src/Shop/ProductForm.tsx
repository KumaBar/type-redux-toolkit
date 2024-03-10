import React, { useState } from "react"
import { IProduct, addProduct } from "./product.slice"
import { useAppDispatch } from "../store.hooks"


export const ProductForm = () => {
    const dispatch = useAppDispatch()
    const [product, setProduct] = useState<IProduct>({
        id: '',
        title: '',
        price: 0
    })
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setProduct(prev => {
            (prev as any)[e.target.name] = e.target.value
            const newValue = { ...prev, }
            return newValue
        })
    }
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        dispatch(addProduct(product))
    }
    return (
        <>
            <h2>Product form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title" value={product.title} onChange={handleChange} />
                <input type="number" name="price" placeholder="price" value={product.price} onChange={handleChange} />
                <input type="text" name="id" placeholder="id" value={product.id} onChange={handleChange} />
                <button type="submit">add price</button>
            </form>
        </>
    )
}