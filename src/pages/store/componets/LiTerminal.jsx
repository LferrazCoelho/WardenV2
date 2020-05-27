import React, { Component, Fragment } from 'react'
import Status from '../../../componets/Status'
import IconButton from '../../../componets/IconButton'

export default class LiTerminal extends Component{
    render() {
        return (
            <Fragment>
                <th>
                    <div className="media align-items-center">{this.props.create_date}</div>
                </th>
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
                <td>
                    <IconButton
                        size="btn-sm"
                        color="danger"
                        icon="settings-gear-65"
                    />
                </td>
            </Fragment>
        )
    }
}