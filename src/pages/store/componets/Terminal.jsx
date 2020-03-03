import React, { Component, Fragment } from 'react'
import TerminalLi from './TerminalLi'

export default class Terminal extends Component {
    render() {
        return (
            <Fragment>
                <div className="card-header d-flex align-items-center bg-transparent border-0">
                    <h5 className="mb-0 mr-2">Terminais</h5>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Data de Criação</th>
                                <th>Atendente</th>
                                <th>ID</th>
                                <th>VPN</th>
                                <th>Pinpad</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TerminalLi
                                create_date="31/01/2020"
                                user="024.345.123-91"
                                id="SW000010"
                                vpn="17D9CE54"
                                pinpad="17D9CE5416D8CE53"
                                status="0"
                            />
                            <TerminalLi
                                create_date="28/01/2020"
                                user="024.345.123-91"
                                id="SW000009"
                                vpn="16D8CE53"
                                pinpad="16D8CE5317D9CE54"
                                status="1"
                            />
                        </tbody>
                    </table>
                </div>
            </Fragment>
                )
            }
}