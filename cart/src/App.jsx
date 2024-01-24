import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function App({name}) {
  const [products , setProducts] = useState([])
  useEffect(() => {
    fetchCartProducts()
  },[])
  const fetchCartProducts = async () => {
    const res = await axios.get('https://65b0d86ad16d31d11bdd61cb.mockapi.io/api/cartProducts/cartProducts')
    setProducts(res.data)
  }

  const handleDelete = async (id) => {
    const res = await axios.delete(`https://65b0d86ad16d31d11bdd61cb.mockapi.io/api/cartProducts/cartProducts/${id}` )
  }
  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((pro) => {
              return (
                <tr key={pro.id}>
            <img src={pro.image} alt="" width={100}/>
            <td>{pro.title}</td>
            <td>{pro.price}$</td>
            <td>
              <button onClick={() => handleDelete(pro.id)}>Delete</button>
            </td>
          </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App