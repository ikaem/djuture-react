import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/homepage';
import Profile from './pages/profile';
import Cart from './pages/cart';
import Product from './pages/product';

function App() {
  return (
    <Layout>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
