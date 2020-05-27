import React, { Component, Fragment } from 'react'
import CardHead from '../../../componets/CardHead'
import Input from '../../../componets/Input'
import Select from '../../../componets/Select'
import Option from '../../../componets/Option'
import ButtonIcon from '../../../componets/ButtonIcon'

export default class FormClients extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <form className="pr-3 pl-3 pt-1 pb-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <CardHead
                                            title="Busca"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <Input
                                            type="text"
                                            id="date-init"
                                            placeholder="Data Inicio"
                                        />
                                        <Input
                                            type="text"
                                            id="date-end"
                                            placeholder="Data Final"
                                        />
                                        <Input
                                            type="text"
                                            id="name"
                                            placeholder="Nome"
                                        />
                                        <Input
                                            type="text"
                                            id="cpf"
                                            placeholder="Documento"
                                        />
                                        <Input
                                            type="text"
                                            id="email"
                                            placeholder="Email"
                                        />
                                        <Input
                                            type="text"
                                            id="phone"
                                            placeholder="Telefone"
                                        />
                                        <Input
                                            type="text"
                                            id="place"
                                            placeholder="Placa"
                                        />
                                        <Input
                                            type="text"
                                            id="renavam"
                                            placeholder="RENAVAM"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <ButtonIcon
                                                size="btn-sm"
                                                color="danger"
                                                icon="send"
                                                title="Pesquisar"
                                            />
                                            <ButtonIcon
                                                size="btn-sm"
                                                color="danger"
                                                icon="curved-next"
                                                title="Limpar"
                                            />
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