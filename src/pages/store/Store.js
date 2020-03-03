import React, { Component, Fragment } from 'react'
import Head from '../../componets/Head'
import ResumeStore from './componets/ResumeStore'
import FormStore from './componets/FormStore'
import TableStore from './componets/TableStore'

export default class Store extends Component{
    render() {
        return(
            <Fragment>
                <Head
                    bgHead="bgHeadStore"
                    titlepage="Estabelecimentos"
                    userName="Kairon Velozo"
                    avatar="https://ca.slack-edge.com/T5Z5RFR3M-U9HN1FPD1-8810ea9bfd6d-512"
                    ResumePage={<ResumeStore />}
                />
                <div className="container-fluid mt--8">
                    <FormStore />
                    <TableStore />
                </div>
            </Fragment>
        )
    }
}