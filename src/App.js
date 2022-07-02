import React from "react";
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Cart from "./components/products/Cart";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    
    <Router>
       
     <div>
     <TopMenu />
     <ToastContainer/>
        <Switch>
        <Route path="/products/cart" component={Cart}/> 
          <Route path="/products" exact component={Products}/>
          <Route path="/contact" component={Contact}/> 
          <Route path="/about" component={About}/> 
          <Route path="/login" component={Login}/> 
          <Route path="/signup" component={SignUp}/> 
           <Route path="/notfound" component={PageNotFound}/> 
          <Route path="/" exact component= {LandingPage}/>
          <Redirect to="/notfound"/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
