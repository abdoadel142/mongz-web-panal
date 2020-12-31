import React from "react";
import Products from "../pages/Products";
import Reports from "../pages/Reports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../App.css";
import ProductForm from "../pages/ProductForm";

function Home() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route
            path="/productform/:id"
            render={(props) => (
              <ProductForm {...props} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
