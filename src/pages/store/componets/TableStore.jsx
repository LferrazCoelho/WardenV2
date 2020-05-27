import React, { Component, Fragment } from 'react'
import BgStore from '../../../bg/BgStore.json'
import CardHead from '../../../componets/CardHead'
import Status from '../../../componets/Status'
import ButtonIconCollapse from '../../../componets/ButtonIconCollapse'
import IconButton from '../../../componets/IconButton'
import ScrollPage from '../../../componets/ScrollPage'
import Terminal from './Terminal'

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
                                        {BgStore.map(function(store, index) {
                                            return(
                                                <Fragment>
                                                    <tr key={store.id}>
                                                        <td>{store.store}</td>
                                                        <td>{store.state}</td>
                                                        <td>{store.terminal_amount}</td>
                                                        <td>
                                                            <div>
                                                                <Status status={store.terminal_status} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <ButtonIconCollapse
                                                                    size="btn-sm"
                                                                    color="danger"
                                                                    icon="laptop"
                                                                    title="Terminal"
                                                                    idCollapse={`collapsetext${index}`}
                                                                />
                                                                <IconButton
                                                                    size="btn-sm"
                                                                    color="danger"
                                                                    icon="settings-gear-65"
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <Terminal
                                                            terminals={store.terminals}
                                                            idTermCollapse={`collapsetext${index}`}
                                                        />
                                                    </tr>
                                                </Fragment>
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