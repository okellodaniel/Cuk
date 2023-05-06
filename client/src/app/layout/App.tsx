import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalogue from "../../features/catalogue/catalogue";
import { Typography } from "@mui/material";

function App() {
  // Creating a react hook (Storing in State)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5106/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  // function addProduct() {
  //   setProducts([...products, { name: 'Potats', price: 344 }])
  // }
  function addProduct() {
    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 1,
      name: 'product ' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      description: "Something",
      pictureUrl: "https://picsum.photos/200",
      brand: "Something"
    }]);
  }

  return (
    <>
      <Typography variant="h1">Cuk App</Typography>
      <Catalogue products={products} addProduct={addProduct} />
    </>

  );
}

export default App;
