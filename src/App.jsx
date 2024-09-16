import './App.css'
import CartPage from './CartPage'
import { CartProvider } from './CartContext'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <>
    <div className="container-fluid bg-light">
        <h1 className='fs-2 p-3 text-success'>Cart Page</h1>
          <CartProvider>
              <CartPage/>
          </CartProvider>
    </div>
      
      
    </>
  )
}

export default App