import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";

export default class LiSidebar extends Component{
    render() {
        return (
            <Fragment>
                <li className="nav-item active">
                    <Link className="nav-link" to={this.props.link}>
                        <i className={`ni ni-${this.props.icon} text-${this.props.iconColor}`}></i>{this.props.title}
                    </Link>
                </li>
            </Fragment>
        )
    }
}