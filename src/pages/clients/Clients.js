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
                    titlepage="Clientes"
                    userName="Kairon Velozo"
                    avatar="https://ca.slack-edge.com/T5Z5RFR3M-U9HN1FPD1-8810ea9bfd6d-512"
                    ResumePage={<ResumeClients />}
                />
                <div className="container-fluid mt--8">
                    <FormClients />
                    <TableClients />
                </div>
            </Fragment>
        )
    }
}