import React, { Component, Fragment } from 'react'
import Card from '../../../componets/Card'

export default class ResumeStore extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                        <Card
                            title="Estabelecimentos"
                            textColor="primary"
                            status="Total"
                            value="11"
                            sizeCard="col-xl-4"
                            sizeResult="h2"
                        />
                        <Card
                            title="Estabelecimentos"
                            textColor="success"
                            status="Ativados"
                            value="5"
                            sizeCard="col-xl-4"
                            sizeResult="h2"
                        />
                        <Card
                            title="Estabelecimentos"
                            textColor="warning"
                            status="Desativados"
                            value="6"
                            sizeCard="col-xl-4"
                            sizeResult="h2"
                        />
                </div>
            </Fragment>
        )
    }
}