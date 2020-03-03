import React, { Component, Fragment } from 'react'

export default class FormOrders extends Component{
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
                                    <div className="col-12 mb-2 d-flex">
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-text" placeholder="Data Inicio" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-uf" placeholder="Data Final" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-terminal" placeholder="Data da Captura" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-pinpag" placeholder="Data da Autorização" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2 d-flex">
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-text" placeholder="UF" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-uf" placeholder="Origem" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-terminal" placeholder="Parceiro" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-pinpag" placeholder="Estabelecimento" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2 d-flex">
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-text" placeholder="Protocolo" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-uf" placeholder="Pagamento" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-terminal" placeholder="Status" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2 d-flex">
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-text" placeholder="Valor com Juros" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-uf" placeholder="Valor sem Juros" />
                                        </div>
                                        <div className="input-group input-group-sm m-1">
                                            <input type="text" className="form-control" id="search-store-terminal" placeholder="Cupons de Desconto" />
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