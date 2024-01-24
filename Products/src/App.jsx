import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


const App = ({name}) => {
  const [products , setProducts] = useState([])
  const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res.data);
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts();
  },[])

  const MoveToCartProduct = async (product) => {
    let obj = {
      image : product.image,
      price : product.price,
      title : product.title,
    }
    console.log(product)
    const res = await axios.post('https://65b0d86ad16d31d11bdd61cb.mockapi.io/api/cartProducts/cartProducts' , obj)
    console.log(res.data)
  }
  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Products {name}</h1>
      {/* <div style={{display : 'flex' , justifyContent : 'space-between', alignItems : 'center' , paddingLeft : 50 , paddingRight : 50}}>
        <h1 style={{textAlign : 'center'}}>Shoping Center</h1>
        <div style={{display : 'flex' , gap : '5px'}}>
          <button style={{cursor : 'pointer'}}>Products</button>
          <button style={{cursor : 'pointer'}}>Cart (0)</button>
        </div>
      </div> */}
      <ul className='card-container'>
        {
          products.map((pro) => {
            return (
              <li key={pro.id} className="card">
                <img src={pro.image} alt="" />
                <h1>{pro.title}</h1>
                <p>{pro.price} $</p>
                <button onClick={() => MoveToCartProduct(pro)}>Add To Cart</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
export default App;