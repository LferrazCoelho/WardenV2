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
                    titlePage="Pedidos"
                    ResumePage={<ResumeOrders />}
                    userName={this.props.userName}
                    avatar={this.props.avatar}
                />
                <div className="container-fluid mt--8">
                    <FormOrders />
                    <TableOrders />
                </div>
            </Fragment>
        )
    }
}
