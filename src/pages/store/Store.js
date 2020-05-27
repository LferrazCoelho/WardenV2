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
                    titlePage="Estabelecimentos"
                    ResumePage={<ResumeStore />}
                    userName={this.props.userName}
                    avatar={this.props.avatar}
                />
                <div className="container-fluid mt--8">
                    <FormStore />
                    <TableStore />
                </div>
            </Fragment>
        )
    }
}