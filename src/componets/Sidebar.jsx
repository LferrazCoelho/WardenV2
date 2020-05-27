import React, { Component, Fragment } from 'react'
import DropNavUser from './DropNavUser'
import LiSidebar from './LiSidebar'
import Tips from './Tips'

export default class Sidebar extends Component{
    render() {

        const brand = "https://i.ibb.co/dgkVqBC/new-logo.png"

        return (
            <Fragment>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                    <div className="container-fluid">
                        {/* <!-- Toggler --> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <!-- Brand --> */}
                        <a className="navbar-brand pt-0" href="./index.html">
                            <img src={ brand } className="navbar-brand-img" alt="..." />
                        </a>
                        {/* <!-- User --> */}
                        <ul className="nav align-items-center d-md-none">
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="Image placeholder" src={this.props.avatar} />
                                        </span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                    <DropNavUser />
                                </div>
                            </li>
                        </ul>
                        {/* <!-- Collapse --> */}
                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                            {/* <!-- Collapse header --> */}
                            <div className="navbar-collapse-header d-md-none">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="./index.html">
                                            <img src={ brand } />
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Navigation --> */}
                            <ul className="navbar-nav">
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
                            <ul className="navbar-nav d-none d-sm-block">
                                <Tips />
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
