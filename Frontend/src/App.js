import './App.css';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useState,useEffect } from 'react';
import { commerce } from './lib/Commerce';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';



function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async()=>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async ()=>{
    setCart( await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId , quantity)=>{
    const {cart} = await commerce.cart.add(productId,quantity);
    setCart(cart);
  }
  
  const handleUpdateCartQty = async (productId , quantity)=>{
    const {cart} = await commerce.cart.update(productId,{quantity});
    setCart(cart);
  }
  
  const handleRemoveFromCart = async (productId)=>{
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }
  
  const handleEmptyCart = async ()=>{
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }


  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[]);

  console.log(cart);



  const [User, setUser] = useState(null);
  return (
    
    <div style={{backgroundColor: '#263238'}}>

    <Router>
        {/* {User!==null?<Home cart={cart} products={products} onAddToCart={handleAddToCart} handleUpdateCartQty={handleUpdateCartQty}
         handleEmptyCart={handleEmptyCart}
        handleRemoveFromCart={handleRemoveFromCart}/>:<Login setUser={setUser} user={User} />} */}
      <Switch>
        <Route exact path='/Home'><Home cart={cart} products={products} onAddToCart={handleAddToCart} User={User} /></Route>
        <Route exact path='/'><Login setUser={setUser} user={User} /></Route>
        
        <Route exact path='/cart'>
        <Cart cart={cart}
        User={User}
         handleUpdateCartQty={handleUpdateCartQty}
         handleEmptyCart={handleEmptyCart}
         handleRemoveFromCart={handleRemoveFromCart} />
        </Route>
        
      </Switch>
      <Footer/>
    </Router>
         </div>
  );
}

export default App;
