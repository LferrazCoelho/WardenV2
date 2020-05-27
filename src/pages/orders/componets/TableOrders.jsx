import React, { Component, Fragment } from 'react'
import bgOrders from '../../../bg/BgOrders.json'
import CardHead from '../../../componets/CardHead'
import ScrollPage from '../../../componets/ScrollPage'

export default class TableOrders extends Component{
    render() {
        return(
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <div className="col">
                        <div className="card shadow">
                            <CardHead
                                title="Resultado da Busca"
                            />
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Data</th>
                                            <th scope="col">Protocolo</th>
                                            <th scope="col">Placa</th>
                                            <th scope="col">UF</th>
                                            <th scope="col">Origem</th>
                                            <th scope="col">Valor s/ juros</th>
                                            <th scope="col">Valor c/ juros</th>
                                            <th scope="col">Valor Boletos</th>
                                            <th scope="col">Valor Liquido</th>
                                            <th scope="col">Cupom</th>
                                            <th scope="col">Desconto</th>
                                            <th scope="col">Valor c/ Desconto</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Prioridade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bgOrders.map(function(orders) {
                                            return(
                                                <tr key={orders.id}>
                                                    <td>{ new Date( orders.created_at ).toLocaleString('pt-BR') }</td>
                                                    <td>{orders.protocol}</td>
                                                    <td>{orders.place}</td>
                                                    <td>{orders.state}</td>
                                                    <td>{orders.origin}</td>
                                                    <td>{ new Number( orders.total_amount ).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</td>
                                                    <td>{ new Number( orders.base_amount ).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</td>
                                                    <td>{ new Number( orders.bill_amount ).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</td>
                                                    <td>{ new Number( orders.net_amount ).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</td>
                                                    <td>{orders.promotional_ticket}</td>
                                                    <td>{orders.promotional_ticket_discount}</td>
                                                    <td>{ new Number( orders.promotional_ticket_amount ).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</td>
                                                    <td>{orders.status}</td>
                                                    <td>
                                                        <div className="row justify-content-md-center">
                                                            <input type="checkbox" aria-label="Chebox para permitir input text" />
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