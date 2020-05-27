// SIDEBAR
import React, { Component, Fragment } from 'react'
import LiSidebar from './LiSidebar'

export default class Sidebar extends Component{
    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <a className="navbar-brand pt-0" href="http://localhost:3000/">
                                <img src="https://i.ibb.co/dgkVqBC/new-logo.png" className="navbar-brand-img" alt="..." />
                            </a>
                            <LiSidebar
                                link="/"
                                title="Pedidos"
                                icon="books"
                                iconColor="danger"
                                />
                            <LiSidebar
                                link="/store"
                                title="Estabelecimentos"
                                icon="shop"
                                iconColor="danger"
                                />
                            <LiSidebar
                                link="/client"
                                title="Clientes"
                                icon="single-02"
                                iconColor="danger"
                            />
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

{/* <i class="ni ni-bold-left m-2"></i> */}
// https://avatars.slack-edge.com/2020-02-07/942576391552_d1efb4d3e3a105660fc7_88.png
// https://i.ibb.co/dgkVqBC/new-logo.png


// HEAD
import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import './index.css'
import './Head.css'

export default class Head extends Component{
    render() {
      const ResumePage = this.props.ResumePage
        return (
            <Fragment>
              <Nav
                titlePage={this.props.titlePage}
                userName={this.props.userName}
                avatar={this.props.avatar}
              />
              <div className={`header ${this.props.bgHead} bg-danger pb-8 pt-5 pt-md-8`}>
                <div className="container-fluid">
                  <div className="header-body">
                    <div className="row justify-content-md-center">
                      {ResumePage}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
        )
    }
}


// NAV
import React, { Component, Fragment } from 'react'
import './index.css'
import User from './User'
import DropUser from './DropUser'

export default class Nav extends Component{
    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="nav">
                    <div className="container-fluid">
                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">{this.props.titlePage}</a>
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="http://localhost:3000/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <User
                                        avatar={this.props.avatar}
                                        userName={this.props.userName}
                                    />
                                    <DropUser />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}