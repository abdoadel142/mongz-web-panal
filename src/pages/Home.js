import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "../pages/Products";
import Reports from "../pages/Reports";
import Navbar from "../components/Navbar";

import "../App.css";
import ProductForm from "../pages/ProductForm";
import Restaurants from './Restaurants';
import MenuForm from './MenuForm';

function Home() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/restaurants" component={Restaurants} />
          <Route
            path="/productform/:id"
            render={(props) => (
              <ProductForm {...props} />
            )}
          />
          <Route
            path="/menuform/:id"
            render={(props) => (
              <MenuForm {...props} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
