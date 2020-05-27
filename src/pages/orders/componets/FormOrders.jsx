import React, { Component, Fragment } from 'react'
import BgSelectState from '../../../bg/BgSelectState.json'
import BgSelectStatus from '../../../bg/BgSelectStatus.json'
import BgSelectTerminal from '../../../bg/BgSelectTerminal.json'
import BgSelectStore from '../../../bg/BgSelectStore.json'
import BgSelectOrigin from '../../../bg/BgSelectOrigin.json'
import BgSelectPay from '../../../bg/BgSelectPay.json'
import CardHead from '../../../componets/CardHead'
import Input from '../../../componets/Input'
import Select from '../../../componets/Select'
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
                                    <div className="col-md-12">
                                        <CardHead
                                            title="Buscar"
                                        />
                                    </div>
                                    {/* <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample"> */}
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
                                                    id="date-cap"
                                                    placeholder="Data Captura"
                                                />
                                                <Input
                                                    type="text"
                                                    id="date-valid"
                                                    placeholder="Data Autorização"
                                                />
                                                <Select
                                                    bgOption={ BgSelectState }
                                                    id="select-uf"
                                                    titleSelect="UF"
                                                    childBg="state"
                                                />      
                                                <Select
                                                    bgOption={ BgSelectStore }
                                                    id="select-store"
                                                    titleSelect="Parceiro"
                                                    childBg="store"
                                                />      
                                                <Select
                                                    bgOption={ BgSelectTerminal }
                                                    id="select-uf"
                                                    titleSelect="Estabelecimento"
                                                    childBg="terminal"
                                                />      
                                                <Select
                                                    bgOption={ BgSelectOrigin }
                                                    id="select-uf"
                                                    titleSelect="Origem"
                                                    childBg="origin"
                                                />      
                                                <Select
                                                    bgOption={ BgSelectStatus }
                                                    id="select-status"
                                                    titleSelect="Status"
                                                    childBg="status"
                                                />
                                                <Select
                                                    bgOption={ BgSelectPay }
                                                    id="select-pay"
                                                    titleSelect="Pagamento"
                                                    childBg="pay"
                                                />
                                                <Input
                                                    type="text"
                                                    id="protocol"
                                                    placeholder="Protocolo"
                                                />
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
                                    {/* </div> */}
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