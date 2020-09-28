import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Login from './Login';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Product from './Product';
import Register from './Register'
import Admin from './Admin';
import Admindashboard from './Admindashboard'

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>

       <Route path="/admindashboard">
            <Navbar />
            <Product />
            <Admindashboard />
          </Route>
          <Route path="/admin">
            <Navbar />
            <Product />
            <Admin />
          </Route>
      
         <Route path="/login">
           <Navbar/>
           
           <Login/>
         </Route>

         <Route path="/signup">
           <Navbar/>
           
           <Register/>
         </Route>
         <Route path="/checkout">
           <Navbar/>
           <Product/>
           <Checkout/>
         </Route>
         <Route path="/">
           <Navbar/>
           <Product/>
           <Home/>
         </Route>

       </Switch>

      </Router>
      
        
        
    
    </div>
  );
}

export default App;
