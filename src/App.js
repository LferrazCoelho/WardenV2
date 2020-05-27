import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './componets/Sidebar'
import Store from './pages/store/Store'
import Orders from './pages/orders/Orders'
import Clients from './pages/clients/Clients'
// import Login from './pages/login/Login'
import './componets/index.css'

export default class App extends Component{
  render() {

    const userName = "Kairon Velozo"
    const avatar = "https://ca.slack-edge.com/T5Z5RFR3M-U9HN1FPD1-8810ea9bfd6d-48"

    return (
      <Router>
        <Fragment>
          
          <Sidebar
            avatar= {avatar}
          />

          <div className="main-content">
            <Switch>

              <Route path="/store">
                <Store
                  userName= {userName}
                  avatar= {avatar}
                />
              </Route>

              <Route path="/client">
                <Clients
                  userName= {userName}
                  avatar= {avatar}
                />
              </Route>

              {/* <Route path="/login">
                <Login />
              </Route> */}

              <Route path="/">
                <Orders 
                  userName= {userName}
                  avatar= {avatar}
                />
              </Route>

            </Switch>
          </div>

        </Fragment>
      </Router>
    )
  }
}
