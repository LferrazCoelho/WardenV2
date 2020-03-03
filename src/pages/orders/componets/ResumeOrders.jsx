import React, { Component, Fragment } from 'react'
import CardResume from '../../../componets/CardResume'

export default class ResumeOrders extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <CardResume
                        title="Valor Total"
                        textColor="danger"
                        status="Com Juros"
                        value="R$ 13.753.504,53"
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                    <CardResume
                        title="Valor Total"
                        textColor="danger"
                        status="Sem Juros"
                        value="R$ 11.555.547,53"
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                    <CardResume
                        title="Valor Total"
                        textColor="danger"
                        status="Liquido"
                        value="R$ 13.090.392,53"
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                    <CardResume
                        title="Valor Total"
                        textColor="danger"
                        status="Boletos"
                        value="R$ 11.421.801,53"
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                </div>
            </Fragment>
        )
    }
}