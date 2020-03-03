import React, { Component, Fragment } from 'react'
import Status from './Status'

export default class StoreLi extends Component{
    render() {
        return (
            <Fragment>
                <th scope="row">
                    <div className="media align-items-center">{this.props.store}</div>
                </th>
                <td>
                    <div>{this.props.uf}</div>
                </td>
                <td>
                    <div>{this.props.terminalAmount}</div>
                </td>
                <td>
                    <div className="avatar-group">
                        <Status status={this.props.status}/>
                    </div>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-icon btn-sm btn-danger" type="button">
                            <span className="btn-inner--icon">
                                <i className="ni ni-settings-gear-65"></i>
                            </span>
                            <span className="btn-inner--text">Editar</span>
                        </button>
                    </div>
                </td>
            </Fragment>
        )
    }
}