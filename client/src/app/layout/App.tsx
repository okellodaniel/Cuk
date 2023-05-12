import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalogue from "../../features/catalogue/catalogue";
import { Container, CssBaseline } from "@mui/material";
import NavBar from "./NavigationBar";

function App() {
  // Creating a react hook (Storing in State)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5106/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

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
      <CssBaseline />
      <NavBar />
      <Container>
        <Catalogue products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}

export default App;
