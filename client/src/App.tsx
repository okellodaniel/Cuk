import { useState } from "react";

function App() {
  // Creating a react hook (Storing in State)
  const [products, setProducts] = useState([
    { name: 'Cassava', price: 100 },
    { name: 'Potats', price: 200 }
  ])

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
        {products.map((item, index) => {
          return <li key={index}>{item.name} - {item.price}</li>
        })}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>

  );
}

export default App;
