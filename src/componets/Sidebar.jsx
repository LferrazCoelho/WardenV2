import React, { Component, Fragment } from 'react'
import SidebarLi from './SidebarLi'

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
                                <SidebarLi
                                    link="/"
                                    title="Pedidos"
                                    icon="books"
                                    iconColor="danger"
                                    />
                                <SidebarLi
                                    link="/store"
                                    title="Estabelecimentos"
                                    icon="shop"
                                    iconColor="danger"
                                    />
                                <SidebarLi
                                    link="/client"
                                    title="Clientes"
                                    icon="single-02"
                                    iconColor="danger"
                                    />
                                    {/* <SidebarLi
                                        link="/"
                                        title="Pagamentos"
                                        icon="credit-card"
                                        iconColor="danger"
                                    /> */}
                                    {/* <SidebarLi
                                        link="/"
                                        title="Relatório"
                                        icon="bullet-list-67"
                                        iconColor="danger"
                                    /> */}
                                {/* <SidebarLi
                                    link="/"
                                    title="Tickets Promocionais"
                                    icon="money-coins"
                                    iconColor="danger"
                                />
                                <SidebarLi
                                    link="/"
                                    title="Boletos"
                                    icon="map-big"
                                    iconColor="danger"
                                />
                                <SidebarLi
                                    link="/"
                                    title="Blacklist"
                                    icon="user-run"
                                    iconColor="danger"
                                /> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}