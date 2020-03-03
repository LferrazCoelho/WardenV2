import React, { Component, Fragment } from 'react'

export default class CardHead extends Component{
    render() {
        return (
            <Fragment>
                <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">{this.props.title}</h3>
                </div>
            </Fragment>
        )
    }
}
