import React, { Component, Fragment } from 'react'
import LiTerminal from './LiTerminal'

export default class Terminal extends Component {
    render() {
        return (
            <Fragment>
                <td className="collapse pt-0 pb-3 pr-0 pl-0" id={this.props.idTermCollapse} colspan="5">
                    <div className="table-responsive-sm">
                        <table className="table table align-items-center table-flush">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Data de Criação</th>
                                    <th scope="col">Atendente</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">VPN</th>
                                    <th scope="col">Pinpad</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.terminals.map(function(terminal) {
                                            return(
                                                <Fragment>
                                                    <tr>
                                                        <td>{terminal.id}</td>
                                                        <td>{terminal.created_at}</td>
                                                        <td>{terminal.cpf}</td>
                                                        <td>{terminal.vpn}</td>
                                                        <td>{terminal.pinpag}</td>
                                                        <td>{terminal.status}</td>
                                                    </tr>
                                                </Fragment>
                                            )})
                            }
                            </tbody>
                        </table>
                    </div>
                </td>
            </Fragment>
        )
    }
}