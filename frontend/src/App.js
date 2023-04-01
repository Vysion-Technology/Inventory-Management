import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout.js';
import Home from './views/home/Home.js';
import Consumable from './views/page/Consumable.js';
import Nonconsumable from './views/page/Nonconsumable.js';
import Services from './views/page/Services.js';
import Report from './layout/components/Report';
import './App.css';

function App() {
  // console.log("rohit");
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Consumable">
              <Consumable />
            </Route>
            <Route exact path="/Nonconsumable">
              <Nonconsumable />
            </Route>
            <Route exact path="/Services">
              <Services />
            </Route>
            <Route exact path="/report" component={Report}/>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
