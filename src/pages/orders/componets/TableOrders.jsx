import React, { Component, Fragment } from 'react'
import OrdersLi from './OrdersLi'
import NavPage from '../../../componets/NavPage'

export default class TableOrders extends Component{
    render() {
        return(
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0">Estabelecimentos Zapay</h3>
                            </div>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <OrdersLi 
                                                date="22/01/2020"
                                                protocol="dcg73gew"
                                                place="JHG9876"
                                                uf="GO"
                                                orig="Seller"
                                                valuerS="R$ 204,45"
                                                valuerC="R$ 231,45"
                                                boleto="R$ 204,45"
                                                liquid="R$ 224,45"
                                                cupom="sem cupom"
                                                off="0%"
                                            />
                                        </tr>
                                        <tr>
                                            <OrdersLi 
                                                date="22/01/2020"
                                                protocol="dcg73gew"
                                                place="JHG9876"
                                                uf="GO"
                                                orig="Seller"
                                                valuerS="R$ 204,45"
                                                valuerC="R$ 231,45"
                                                boleto="R$ 204,45"
                                                liquid="R$ 224,45"
                                                cupom="sem cupom"
                                                off="0%"
                                            />
                                        </tr>
                                        <tr>
                                            <OrdersLi 
                                                date="22/01/2020"
                                                protocol="dcg73gew"
                                                place="JHG9876"
                                                uf="GO"
                                                orig="Seller"
                                                valuerS="R$ 204,45"
                                                valuerC="R$ 231,45"
                                                boleto="R$ 204,45"
                                                liquid="R$ 224,45"
                                                cupom="sem cupom"
                                                off="0%"
                                            />
                                        </tr>
                                        <tr>
                                            <OrdersLi 
                                                date="22/01/2020"
                                                protocol="dcg73gew"
                                                place="JHG9876"
                                                uf="GO"
                                                orig="Seller"
                                                valuerS="R$ 204,45"
                                                valuerC="R$ 231,45"
                                                boleto="R$ 204,45"
                                                liquid="R$ 224,45"
                                                cupom="sem cupom"
                                                off="0%"
                                            />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <NavPage
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