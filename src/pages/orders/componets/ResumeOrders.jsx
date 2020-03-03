import React, { Component, Fragment } from 'react'
import Card from '../../../componets/Card'

export default class ResumeOrders extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <Card
                        title="Valor Total"
                        textColor="info"
                        status="Com Juros"
                        value="R$ 13.753.504,53"
                        sizeCard="col-xl-3"
                        sizeResult="h4"
                    />
                    <Card
                        title="Valor Total"
                        textColor="primary"
                        status="Sem Juros"
                        value="R$ 13.753.504,53"
                        sizeCard="col-xl-3"
                        sizeResult="h4"
                    />
                    <Card
                        title="Valor Total"
                        textColor="info"
                        status="Liquido"
                        value="R$ 13.753.504,53"
                        sizeCard="col-xl-3"
                        sizeResult="h4"
                    />
                    <Card
                        title="Valor Total"
                        textColor="primary"
                        status="Boletos"
                        value="R$ 13.753.504,53"
                        sizeCard="col-xl-3"
                        sizeResult="h4"
                    />
                </div>
            </Fragment>
        )
    }
}