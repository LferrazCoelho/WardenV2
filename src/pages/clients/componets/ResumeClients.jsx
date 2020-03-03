import React, { Component, Fragment } from 'react'
import CardResume from '../../../componets/CardResume'

export default class ResumeClients extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <CardResume
                        title="Status Pedido"
                        textColor="danger"
                        status="Total"
                        value="10"
                        sizeCard="col-xl-auto"
                        sizeResult="h2"
                    />
                    <CardResume
                        title="Status Pedido"
                        textColor="danger"
                        status="Pendente"
                        value="2"
                        sizeCard="col-xl-auto"
                        sizeResult="h2"
                    />
                    <CardResume
                        title="Status Pedido"
                        textColor="danger"
                        status="Sucesso"
                        value="4"
                        sizeCard="col-xl-auto"
                        sizeResult="h2"
                    />
                    <CardResume
                        title="Status Pedido"
                        textColor="danger"
                        status="Recusado"
                        value="2"
                        sizeCard="col-xl-auto"
                        sizeResult="h2"
                    />
                </div>
            </Fragment>
        )
    }
}