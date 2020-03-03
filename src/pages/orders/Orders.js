import React, { Component, Fragment } from 'react'
import Head from '../../componets/Head'
import ResumeOrders from './componets/ResumeOrders'
import FormOrders from './componets/FormOrders'
import TableOrders from './componets/TableOrders'

export default class Orders extends Component{
    render() {
        return(
            <Fragment>
                <Head
                    bgHead="bgHeadOrders"
                    titlepage="Pedidos"
                    userName="Kairon Velozo"
                    avatar="https://ca.slack-edge.com/T5Z5RFR3M-U9HN1FPD1-8810ea9bfd6d-512"
                    ResumePage={<ResumeOrders />}
                />
                <div className="container-fluid mt--8">
                    <FormOrders />
                    <TableOrders />
                </div>
            </Fragment>
        )
    }
}
