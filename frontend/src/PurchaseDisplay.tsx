import { IProduct } from "./App.models";

interface IPurchaseDisplayProps {
    productPurchased : IProduct
}

export const PurchaseDisplay = ({productPurchased} : IPurchaseDisplayProps) => {
  return (
      <div className={'Purchase-display-line'}>
          <h1> You purchased a {productPurchased.name} for ${productPurchased.price}</h1>
      </div>
  )
}