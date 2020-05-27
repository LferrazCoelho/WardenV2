import React, { Component, Fragment } from 'react'
import Status from '../../../componets/Status'
import ButtonIconCollapse from '../../../componets/ButtonIconCollapse'
import IconButton from '../../../componets/IconButton'

export default class LiStore extends Component{
    render() {
        return (
            <Fragment>
                <th>
                    <div className="media align-items-center">{this.props.store}</div>
                </th>
                <td>
                    <div>{this.props.uf}</div>
                </td>
                <td>
                    <div>{this.props.terminalAmount}</div>
                </td>
                <td>
                    <div><Status status={this.props.status} /></div>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <ButtonIconCollapse
                            size="btn-sm"
                            color="danger"
                            icon="laptop"
                            title="Terminal"
                            idCollapse={this.props.idLiCollapse}
                        />
                        <IconButton
                            size="btn-sm"
                            color="danger"
                            icon="settings-gear-65"
                        />
                    </div>
                </td>
            </Fragment>
        )
    }
}