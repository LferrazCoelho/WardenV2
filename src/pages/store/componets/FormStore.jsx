import React, { Component, Fragment } from 'react'

export default class FormStore extends Component{
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
                                                <input type="text" className="form-control" id="search-store-text" placeholder="Estabelecimento" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-store-uf" placeholder="UF" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-store-terminal" placeholder="Terminal" />
                                            </div>
                                            <div className="input-group input-group-sm m-1">
                                                <input type="text" className="form-control" id="search-store-pinpag" placeholder="Pinpag" />
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