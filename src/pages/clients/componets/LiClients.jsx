import React, { Component, Fragment } from 'react'

export default class LiClients extends Component{
    render() {
        return (
            <Fragment>
                <td scope="row">
                    <div>{this.props.date}</div>
                </td>
                <td>
                    <div>{this.props.document}</div>
                </td>
                <td>
                    <div>{this.props.email}</div>
                </td>
                <td>
                    <div>{this.props.phone}</div>
                </td>
                <td>
                    <div>{this.props.place}</div>
                </td>
                <td>
                    <div>{this.props.renavam}</div>
                </td>
                <td>
                    <div><span class={`badge badge-${this.props.statusColor}`}>{this.props.statusOrders}</span></div>
                </td>
            </Fragment>
        )
    }
}