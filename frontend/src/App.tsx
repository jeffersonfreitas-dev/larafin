import React, { useState } from 'react';
import './App.css';
import { IProduct } from './App.models';
import { Product } from './Product';
import { PurchaseDisplay } from './PurchaseDisplay';



const initialProducts: IProduct[] = 
  [
    {name: 'Keyboard', image: 'https://picsum.photos/200/300', price: 200},
    {name: 'Headphones', image: 'https://picsum.photos/200/300', price: 300},
    {name: 'mouse', image: 'https://picsum.photos/200/300', price: 100}
  ]

  

function App() {

  const [products, setProducts] = useState(initialProducts)
  const [isProductBought, setIsProductBought] = useState(false)
  const [productBought, setProductBought] = useState({name:'', image: '', price: 0})

  const handlePurchase = (product:IProduct) => {
    setProductBought(product)
    setIsProductBought(true)
  }

  return (
    <>
      <h1 className='Tiny-store'>Tiny Store</h1>
      {
        (isProductBought) ? 
          (<PurchaseDisplay productPurchased={productBought} />) 
          : 
          ( <div className={'App-container'}>
            {
              products.map(product => {
                return (
                  <Product product={product} onBuy={handlePurchase} key={product.name}/>   
                )
              })
            }
          </div>
          )}
    </>
  );
}

export default App;
