import { Grid, List } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}
const ProductList = ({ products }: Props) => (

    <List>
        <Grid container spacing={3}>
            {
                products.map(product => {
                    return (
                        <Grid key={product.id} item xs={3}>
                            <ProductCard product={product} />
                        </Grid>
                    )
                })
            }
        </Grid>
    </List>

)

export default ProductList;