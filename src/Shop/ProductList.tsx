import React, { MouseEventHandler, ReactEventHandler, useState } from "react"
import { IProduct, getProductsSelector, deleteProduct } from "./product.slice"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../store.hooks"



export const ProductList = () => {
    const products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch()

    function addProduct() {
        console.log("add product")
    }
    function delProduct(p: IProduct) {
        console.log(p)
        dispatch(deleteProduct(p))
    }
    return (
        <div>
            <h2>Product List</h2>
            {products.map(product =>
                <div key={product.id}>
                    <span>{`${product.title} : ${product.price}`}</span>
                    <button onClick={() => delProduct(product)}>delete product</button>
                </div>
            )}
        </div>
    )
}