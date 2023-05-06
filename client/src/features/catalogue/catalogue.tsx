import { Avatar, ListItem, ListItemAvatar, ListItemText, List, ListItemButton, Button } from "@mui/material";
import { Product } from "../../app/models/Product"

interface props {
    products: Product[];
    addProduct: () => void;

}
export default function Catalogue({ products, addProduct }: props) {
    return (
        <>
            <List>
                {products.map(product => {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={product.pictureUrl} />
                            </ListItemAvatar>
                            <ListItemText>
                                {product.name} - {product.price}
                            </ListItemText>
                        </ListItem>
                    )
                })}
                {/* {products.map(product => {
                    return <li key={product.id}> {product.name} - {product.price} - {product.pictureUrl}</li>
                })} */}
            </List>
            <Button onClick={addProduct}>Add Value</Button>
        </>
    )
}