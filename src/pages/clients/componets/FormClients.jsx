import React, { Component, Fragment } from 'react'

export default class FormClients extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <form className="pr-3 pl-3 pt-1 pb-1">
                                <div className="row">
                                    <div className="card-header bg-transparent border-0">
                                        <h3 className="mb-0">Busca</h3>
                                    </div>
                                    <div className="col-12 align-items-center mb-2 d-flex">
                                            <div className="input-group input-group-sm m-1" data-date-format="dd/mm/yyyy">
                                                <input type="date" className="form-control" id="search-clients-date-start" placeholder="Data inicial" />
                                            </div>
                                            <div className="input-group input-group-sm date m-1" data-date-format="dd/mm/yyyy">
                                                <input type="date" className="form-control" id="search-clients-date-end" placeholder="Data final" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-clients-name" placeholder="Nome" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-clients-docment" placeholder="Documento" />
                                            </div>
                                    </div>
                                    <div className="col-12 mb-2 d-flex">
                                            <div className="input-group input-group-sm m-1">
                                                <input type="email" className="form-control" id="search-clients-email" placeholder="Email" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="phone" className="form-control" id="search-clients-phone" placeholder="Telefone" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-clients-place" placeholder="Placa" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-clients-renavam" placeholder="RENAVAM" />
                                            </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <button className="btn btn-sm btn-icon btn-3 btn-danger m-1" type="button">
                                                <span className="btn-inner--icon"><i className="ni ni-send"></i></span>
                                                <span className="btn-inner--text">Pesquisar</span>
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-3 btn-danger m-1" type="button">
                                                <span className="btn-inner--icon"><i className="ni ni-curved-next"></i></span>
                                                <span className="btn-inner--text">Limpar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}