import React, { Component, Fragment } from 'react'
import LiSidebar from './LiSidebar'

export default class Sidebar extends Component{
    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                    <div className="container-fluid">
                        <a className="navbar-brand pt-0" href="http://localhost:3000/">
                            <img src="https://i.ibb.co/dgkVqBC/new-logo.png" className="navbar-brand-img" alt="..." />
                        </a>
                        <div className="collapse navbar-collapse" id="sidebar">
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
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}