import React, { Component, Fragment } from 'react'
import Head from '../../componets/Head'
import ResumeClients from './componets/ResumeClients'
import FormClients from './componets/FormClients'
import TableClients from './componets/TableClients'

export default class Clients extends Component{
    render() {
        return(
            <Fragment>
                <Head
                    bgHead="bgHeadClients"
                    titlePage="Clientes"
                    ResumePage={<ResumeClients />}
                    userName={this.props.userName}
                    avatar={this.props.avatar}
                />
                <div className="container-fluid mt--8">
                    <FormClients />
                    <TableClients />
                </div>
            </Fragment>
        )
    }
}