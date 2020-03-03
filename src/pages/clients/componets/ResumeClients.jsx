import React, { Component, Fragment } from 'react'
import Card from '../../../componets/Card'

export default class ResumeClients extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <Card
                        title="Status Pedido"
                        textColor="default"
                        status="Total"
                        value="10"
                        sizeCard="col-xl-3"
                        sizeResult="h3"
                    />
                    <Card
                        title="Status Pedido"
                        textColor="primary"
                        status="Pendente"
                        value="2"
                        sizeCard="col-xl-3"
                        sizeResult="h3"
                    />
                    <Card
                        title="Status Pedido"
                        textColor="success"
                        status="Sucesso"
                        value="4"
                        sizeCard="col-xl-3"
                        sizeResult="h3"
                    />
                    <Card
                        title="Status Pedido"
                        textColor="danger"
                        status="Recusado"
                        value="2"
                        sizeCard="col-xl-3"
                        sizeResult="h3"
                    />
                </div>
            </Fragment>
        )
    }
}