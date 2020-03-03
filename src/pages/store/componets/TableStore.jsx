import React, { Component, Fragment } from 'react'
import LiStore from './LiStore'
import Terminal from './Terminal'
import ScrollPage from '../../../componets/ScrollPage'
import CardHead from '../../../componets/CardHead'

export default class TableStore extends Component{
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
                                            <th scope="col">Unidade</th>
                                            <th scope="col">UF</th>
                                            <th scope="col">Terminais</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Opções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <LiStore 
                                                store="Vapt Vupt - Praça da Biblia"
                                                uf="GO"
                                                terminalAmount="1"
                                                status="0"
                                            />
                                        </tr>
                                        <tr>
                                            <td className="pt-0 pb-3 pr-0 pl-0" colspan="5">
                                                <Terminal />
                                            </td>
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="Vapt Vupt - Buriti Shopping"
                                                uf="GO"
                                                terminalAmount="2"
                                                status="2"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - Shopping Popular"
                                                uf="DF"
                                                terminalAmount="2"
                                                status="0"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - Paranoá"
                                                uf="DF"
                                                terminalAmount="1"
                                                status="4"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - AutoShopping"
                                                uf="SP"
                                                terminalAmount="1"
                                                status="1"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - Shopping Aricanduva"
                                                uf="SP"
                                                terminalAmount="2"
                                                status="0"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="Vapt Vupt - Praça da Biblia"
                                                uf="GO"
                                                terminalAmount="4"
                                                status="0"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="Vapt Vupt - Buriti Shopping"
                                                uf="GO"
                                                terminalAmount="2"
                                                status="2"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - Shopping Popular"
                                                uf="DF"
                                                terminalAmount="2"
                                                status="0"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - Paranoá"
                                                uf="DF"
                                                terminalAmount="1"
                                                status="4"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - AutoShopping"
                                                uf="SP"
                                                terminalAmount="2"
                                                status="1"
                                            />
                                        </tr>
                                        <tr>
                                            <LiStore 
                                                store="DETRAN - Shopping Aricanduva"
                                                uf="SP"
                                                terminalAmount="1"
                                                status="0"
                                            />
                                        </tr>
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