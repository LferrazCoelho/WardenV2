import React, { Component, Fragment } from 'react'

export default class CardResumeMoney extends Component{
    render() {
        return(
            <Fragment>
                <div className={`${this.props.sizeCard} col-lg-12`}>
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h4 className="card-title text-default mb-0">{this.props.title}</h4>
                                    <h5 className={`card-title text-uppercase mb-0 text-${this.props.textColor}`}>
                                        {this.props.status}
                                    </h5>
                                    <span className={`${this.props.sizeResult} font-weight-bold mb-0`}>
                                        { new Number( this.props.value ).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}