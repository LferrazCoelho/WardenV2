import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './componets/Sidebar'
import Store from './pages/store/Store'
import Orders from './pages/orders/Orders'
import Clients from './pages/clients/Clients'
import './componets/index.css'

export default class App extends Component{
  render() {
    return (
      <Router>
        <Fragment>

          <Sidebar />

          <div className="main-content">
            <Switch>
              <Route path="/store">
                <Store />
              </Route>

              <Route path="/client">
                <Clients />
              </Route>

              <Route path="/login">
                <Clients />
              </Route>

              <Route path="/">
                <Orders />
              </Route>
            </Switch>
          </div>

        </Fragment>
      </Router>
    )
  }
}
