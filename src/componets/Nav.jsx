import React, { Component, Fragment } from 'react'
import './index.css'

export default class Nav extends Component{
    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="nav">
                    <div className="container-fluid">
                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">{this.props.titlepage}</a>
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="http://localhost:3000/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="border border-white avatar avatar-sm rounded-circle">
                                            <img alt="Image placeholder" src={this.props.avatar} />
                                        </span>
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">{this.props.userName}</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}