import React, { Component, Fragment } from 'react'

export default class Tips extends Component{
    render() {

        const tigsNew = "Podemos não ganhar todas as batalhas, mas devemos dar sempre o nosso máximo"

        return (
            <Fragment>
                    <li className="nav-item active active-pro mt-2 mb-2">
                        <a className="nav-link">
                            <i className="ni ni-bulb-61 text-dark"></i>
                            { tigsNew }
                        </a>
                    </li>
            </Fragment>
        )
    }
}