import React from 'react';
import Products from '../pages/Products'
import Reports from '../pages/Reports'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import '../App.css'
function Home() {
  return (
    <div  >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default Home;
