import React, { Component, Fragment } from 'react'
import BgClients from '../../../bg/BgClients.json'
import ScrollPage from '../../../componets/ScrollPage'

export default class TableClients extends Component{
    render() {
        return(
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0">Clientes Zapay</h3>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Data</th>
                                            <th scope="col">Documento</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Telefone</th>
                                            <th scope="col">Placa</th>
                                            <th scope="col">RENAVAM</th>
                                            <th scope="col">Status Pagamento</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {BgClients.map(function(client) {
                                            return(
                                                <tr key={client.id}>
                                                    <td>{ new Date( client.created_at ).toLocaleString('pt-BR') }</td>
                                                    <td>{client.document}</td>
                                                    <td>{client.email}</td>
                                                    <td>{client.phone}</td>
                                                    <td>{client.license_plate}</td>
                                                    <td>{client.renavam}</td>
                                                    <td>
                                                        <div>
                                                            <span class={`badge badge-${"success"}`}>{client.last_payment_status}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ScrollPage
                           numPageBack=""
                           numPageCurrent="1"
                           numPageNext="2"
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
}