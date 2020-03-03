import React, { Component, Fragment } from 'react'
import CardResume from '../../../componets/CardResume'

export default class ResumeStore extends Component{
    render() {
        return (
            <Fragment>
                <div className="row mr-0 ml-0 mt-4">
                        <CardResume
                            title="Estabelecimentos"
                            textColor="danger"
                            status="Total"
                            value="11"
                            sizeCard="col-xl-auto"
                            sizeResult="h2"
                        />
                        <CardResume
                            title="Estabelecimentos"
                            textColor="danger"
                            status="Ativados"
                            value="5"
                            sizeCard="col-xl-auto"
                            sizeResult="h2"
                        />
                        <CardResume
                            title="Estabelecimentos"
                            textColor="danger"
                            status="Desativados"
                            value="6"
                            sizeCard="col-xl-auto"
                            sizeResult="h2"
                        />
                </div>
            </Fragment>
        )
    }
}