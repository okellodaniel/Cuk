import { useEffect, useState } from "react";

function App() {
  // Creating a react hook (Storing in State)
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ])

  useEffect(() => {
    fetch("http://localhost:5106/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  // function addProduct() {
  //   setProducts([...products, { name: 'Potats', price: 344 }])
  // }
  function addProduct() {
    setProducts(prevState => [...prevState, { name: 'product ' + (prevState.length + 1), price: (prevState.length * 100) + 100 }]);
  }

  return (
    <div>
      <h1>Cuk App</h1>
      <ul>
        {products.map((product, index) => {
          return <li key={index}> {product.name} - {product.price}</li>
        })}
      </ul>
      <button onClick={addProduct}>Add Value</button>
    </div>

  );
}

export default App;
