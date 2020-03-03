import React, { Component, Fragment } from 'react'
import ClientsLi from './ClientsLi'
import NavPage from '../../../componets/NavPage'

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
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="danger"
                                                statusOrders="Recusado"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="success"
                                                statusOrders="Sucesso"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="success"
                                                statusOrders="Sucesso"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="danger"
                                                statusOrders="Recusado"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="success"
                                                statusOrders="Sucesso"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="primary"
                                                statusOrders="Pendente"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="info"
                                                statusOrders="Simulação"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="primary"
                                                statusOrders="Pendente"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="info"
                                                statusOrders="Simulação"
                                            />
                                        </tr>
                                        <tr>
                                            <ClientsLi 
                                                date="18/02/2020"
                                                document="034.114.501-43"
                                                email="rayanne.amuhhemuhun@gmail.com"
                                                phone="(61)98158-3263"
                                                place="FNX8672"
                                                renavam="10432267775"
                                                statusColor="success"
                                                statusOrders="Sucesso"
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