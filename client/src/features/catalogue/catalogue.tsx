import { Product } from "../../app/models/Product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalogue() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch("http://localhost:5106/api/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <ProductList products={products} />
        </>
    )
}