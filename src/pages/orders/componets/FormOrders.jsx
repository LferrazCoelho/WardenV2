import React, { Component, Fragment } from 'react'
import CardHead from '../../../componets/CardHead'
import Input from '../../../componets/Input'
import Select from '../../../componets/Select'
import Option from '../../../componets/Option'
import ButtonIcon from '../../../componets/ButtonIcon'

export default class FormOrders extends Component{
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
                                    <div className="col-md-12 mb-2 d-flex">
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
                                            id="date-cap"
                                            placeholder="Data Captura"
                                        />
                                        <Input
                                            type="text"
                                            id="date-valid"
                                            placeholder="Data Autorização"
                                        />
                                    </div>
                                    <div className="col-md-12 mb-2 d-flex">
                                        <Select
                                            id="select-uf"
                                            option={<Option value="UF" />}
                                        />    
                                        <Select
                                            id="select-origin"
                                            option={<Option value="Origem" />}
                                        />    
                                        <Select
                                            id="select-parsa"
                                            option={<Option value="Parceiro" />}
                                        />    
                                        <Select
                                            id="select-store"
                                            option={<Option value="Estabelecimento" />}
                                        />    
                                    </div>
                                    <div className="col-12 mb-2 d-flex">
                                        <Input
                                            type="text"
                                            id="protocol"
                                            placeholder="Protocolo"
                                        />
                                        <Input
                                            type="text"
                                            id="pay"
                                            placeholder="Pagamento"
                                        />
                                        <Input
                                            type="text"
                                            id="status"
                                            placeholder="Status"
                                        />
                                    </div>
                                    <div className="col-12 mb-2 d-flex">
                                        <Input
                                            type="text"
                                            id="value-tax"
                                            placeholder="Valor com Juros"
                                        />
                                        <Input
                                            type="text"
                                            id="value-not-tax"
                                            placeholder="Valor sem Juros"
                                        />
                                        <Input
                                            type="text"
                                            id="cupom"
                                            placeholder="Cupom de Desconto"
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