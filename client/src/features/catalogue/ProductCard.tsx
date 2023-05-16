import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/Product";

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => (

    <Card>
        <CardHeader
            avatar={
                <Avatar sx={{ backgroundColor: "secondary.main" }}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={
                { sx: { fontWeight: "Bold", color: "primary.main" } }
            }
        />
        <CardMedia
            sx={{ height: 140, backgroundSize: "contain" }}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" color="secondary">
                ${(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.brand} / {product.type}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add to cart</Button>
            <Button size="small">View Item</Button>
        </CardActions>

    </Card>
)

export default ProductCard;