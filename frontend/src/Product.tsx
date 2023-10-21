import {IProduct} from "./App.models";

interface IProductProps {
  product: IProduct;
  onBuy(product: IProduct): void
}

export const Product = ({product, onBuy}:IProductProps) => {
  return (
  <div className={'App-item'}>
  <div className={'Product-name-container'}>
      <h3> {product.name}</h3> 
      <button className={'App-button'} onClick={() => onBuy(product)}>buy</button>
  </div>
  <div><img src={product.image} alt={product.name} style={{width: '200px'}} /></div>
  <div className={'Price-item'}>price ${product.price}</div>
  </div>     
  ) 
}