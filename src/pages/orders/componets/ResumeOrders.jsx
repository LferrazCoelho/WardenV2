import React, { Component, Fragment } from 'react'
import BgAmount from '../../../bg/BgAmount.json'
import CardResumeMoney from '../../../componets/CardResumeMoney'

export default class ResumeOrders extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                    <CardResumeMoney
                        title="Valor Total"
                        textColor="danger"
                        status="Com Juros"
                        value={BgAmount.total_total_amount}
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                    <CardResumeMoney
                        title="Valor Total"
                        textColor="danger"
                        status="Sem Juros"
                        value={BgAmount.total_base_amount}
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                    <CardResumeMoney
                        title="Valor Total"
                        textColor="danger"
                        status="Liquido"
                        value={BgAmount.total_net_amount}
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                    <CardResumeMoney
                        title="Valor Total"
                        textColor="danger"
                        status="Boletos"
                        value={BgAmount.total_bills_amount}
                        sizeCard="col-xl-auto"
                        sizeResult="h3"
                    />
                </div>
            </Fragment>
        )
    }
}