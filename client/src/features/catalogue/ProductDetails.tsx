import { Divider, Grid, Table, TableBody, TableCell, TableContainer, Typography } from "@mui/material"
import axios from "axios";
import { Console } from "console";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";


const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5106/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <h3> Loading ...</h3>
    if (!product) return <h3>No product found</h3>

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4'>{product.name}</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant='h4' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableBody>
                            <TableBody>
                                <TableCell>In stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </>
    )
}

export default ProductDetails;