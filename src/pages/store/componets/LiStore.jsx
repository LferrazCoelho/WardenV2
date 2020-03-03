import React, { Component, Fragment } from 'react'
import Status from '../../../componets/Status'
import ButtonIcon from '../../../componets/ButtonIcon'

export default class LiStore extends Component{
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
                        <ButtonIcon
                            size="btn-sm"
                            color="danger"
                            icon="settings-gear-65"
                            title="Editar"
                        />
                    </div>
                </td>
            </Fragment>
        )
    }
}