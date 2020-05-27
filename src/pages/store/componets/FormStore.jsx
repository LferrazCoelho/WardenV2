import React, { Component, Fragment } from 'react'
import BgSelectState from '../../../bg/BgSelectState.json'
import BgSelectStore from '../../../bg/BgSelectStore.json'
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
                                    <div className="col-md-12">
                                        <CardHead
                                            title="Busca"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <Select
                                            bgOption={ BgSelectStore }
                                            id="select-store"
                                            titleSelect="Parceiro"
                                            childBg="store"
                                        />   
                                        <Select
                                            bgOption={ BgSelectState }
                                            id="select-uf"
                                            titleSelect="UF"
                                            childBg="state"
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