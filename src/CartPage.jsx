import{ useContext } from 'react'
import Product from './components/Product'
import Summary from './components/Summary'
import { CartContext } from './CartContext'

const CartPage = () => {
   const {productDetails}=useContext(CartContext);
  return (
    <>
    {
        productDetails.map((product)=>{
            return  <Product product={product} key={product.id}/>
        })
    }
      <Summary/>
    </>
  )
}

export default CartPage