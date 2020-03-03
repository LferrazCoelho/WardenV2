import React, { Component, Fragment } from 'react'
import Status from '../../../componets/Status'

export default class LiTerminal extends Component{
    render() {
        return (
            <Fragment>
                <tr>
                    <td>
                        <div>{this.props.create_date}</div>
                    </td>
                    <td>
                        <div>{this.props.user}</div>
                    </td>
                    <td>
                        <div>{this.props.id}</div>
                    </td>
                    <td>
                        <div>{this.props.vpn}</div>
                    </td>
                    <td>
                        <div>{this.props.pinpad}</div>
                    </td>
                    <td>
                        <div><Status status={this.props.status} /></div>
                    </td>
                </tr>
            </Fragment>
        )
    }
}