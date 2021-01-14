import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Groceries from "../pages/Groceries";
import Pharmacies from "../pages/Pharmacies";

import "../App.css";
import "../components/Slidebar.css";
import ProductForm from "../pages/ProductForm";
import Restaurants from "../pages/Restaurants";
import Card from "./../components/Card";
import Slidebar from "./../components/Slidebar";
import MenuForm from "./MenuForm";

function Home() {
  return (
    <div>
      <div className="page-wrapper chiller-theme toggled">

        <Slidebar />

        <Router>
          <Switch>
      {/* <Route path="/" component={Restaurants} /> */}
            {console.log("1")}

            <Route path="/restaurants" component={Restaurants} />
            <Route path="/pharmacies" component={Pharmacies} />
            <Route path="/groceries" component={Groceries} />
            <Route path="/home" component={Card} />
           <Route
              path="/productform/:id"
              render={(props) => <ProductForm {...props} />}
            />
            <Route
              path="/menuform/:id"
              render={(props) => <MenuForm {...props} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Home;
