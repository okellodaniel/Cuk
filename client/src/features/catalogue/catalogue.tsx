import { Button } from "@mui/material";
import { Product } from "../../app/models/Product"
import ProductList from "./ProductList";

interface props {
    products: Product[];
    addProduct: () => void;

}
export default function Catalogue({ products, addProduct }: props) {
    return (
        <>
            <ProductList products={products} />
            <Button variant="outlined" onClick={addProduct}>Add Value</Button>
        </>
    )
}