import React, { Component, Fragment } from 'react'
import LiSidebar from './LiSidebar'

export default class SideCollOn extends Component{
    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            {/* <a className="navbar-brand pt-0" href="http://localhost:3000/">
                                <img src="https://i.ibb.co/dgkVqBC/new-logo.png" className="navbar-brand-img" alt="..." />
                            </a> */}
                            <LiSidebar
                                link="/"
                                // title="Pedidos"
                                icon="books"
                                iconColor="danger"
                                />
                            <LiSidebar
                                link="/store"
                                // title="Estabelecimentos"
                                icon="shop"
                                iconColor="danger"
                                />
                            <LiSidebar
                                link="/client"
                                // title="Clientes"
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
