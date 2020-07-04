import React from 'react';
import ReactDOM from 'react-dom';

import {
      BrowserRouter as Router,
      Switch,
      Route
} from "react-router-dom"
 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './component/Home'
import Login from './component/Shop/Login'
import Account from './component/Shop/Account'
import Cart from './component/Shop/Cart'
import Checkout from './component/Shop/Checkout'
import Product from './component/Shop/Product'
import ProductDetail from './component/Shop/ProductDetail'
import BlogList from './component/Blog/BlogList'
import BlogSingle from './component/Blog/BlogSigle'
import Contact from './component/Contact/Contact'
import NotFound from './component/NotFound'
ReactDOM.render(
  <div>
    <Router>
      <App >
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/account' component={Account} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/product' component={Product} />
            <Route path='/product_detail' component={ProductDetail} />
            <Route path='/blog/list' component={BlogList} />
            <Route path='/blog/single/:id' component={BlogSingle} />
            <Route path='/contact' component={Contact} />
            <Route path='/404' component={NotFound} />
        </Switch>
      </App>
    </Router>
    
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
