import React, { Component, Fragment } from 'react'
import CardHead from '../../../componets/CardHead'
import Input from '../../../componets/Input'
import Select from '../../../componets/Select'
import Option from '../../../componets/Option'
import ButtonIcon from '../../../componets/ButtonIcon'

export default class FormStore extends Component{
    render() {        
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <form className="pr-3 pl-3 pt-1 pb-1">
                                <div className="row">
                                    <CardHead
                                        title="Busca"
                                    />
                                    <div className="col-12 mb-2 d-flex">
                                        <Select
                                            id="select-store"
                                            option={<Option value="Estabelecimentos" />}
                                        />  
                                        <Select
                                            id="select-uf"
                                            option={<Option value="UF" />}
                                        /> 
                                        <Input
                                            type="text"
                                            id="terminal"
                                            placeholder="Terminal"
                                        />
                                        <Input
                                            type="text"
                                            id="pinpag"
                                            placeholder="Pinpag"
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
                                                <a className="h6" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                    Expandir Valor agregado
                                                </a>
                                                <div className="row collapse" id="collapseExample">
                                                    <div className="col">
                                                        <span className="h6 surtitle">Titulo</span>
                                                        <span className="d-block h4">Valor</span>
                                                    </div>
                                                    <div className="col">
                                                        <span className="h6 surtitle">Titulo 2</span>
                                                        <span className="d-block h4">Valor 2</span>
                                                    </div>
                                                    <div className="col">
                                                        <span className="h6 surtitle">Titulo 2</span>
                                                        <span className="d-block h4">Valor 2</span>
                                                    </div>
                                                </div>
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