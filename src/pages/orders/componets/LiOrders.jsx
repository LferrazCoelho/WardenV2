import React, { Component, Fragment } from 'react'

export default class LiOrders extends Component{
    render() {
        return (
            <Fragment>
                <th scope="row">
                    <div>{this.props.date}</div>
                </th>
                <td>
                    <div>{this.props.protocol}</div>
                </td>
                <td>
                    <div>{this.props.place}</div>
                </td>
                <td>
                    <div>{this.props.uf}</div>
                </td>
                <td>
                    <div>{this.props.orig}</div>
                </td>
                <td>
                    <div>{this.props.valuerS}</div>
                </td>
                <td>
                    <div>{this.props.valuerC}</div>
                </td>
                <td>
                    <div>{this.props.boleto}</div>
                </td>
                <td>
                    <div>{this.props.liquid}</div>
                </td>
                <td>
                    <div>{this.props.cupom}</div>
                </td>
                <td>
                    <div>{this.props.off}</div>
                </td>
            </Fragment>
        )
    }
}