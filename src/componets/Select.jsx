import React, { Component, Fragment } from 'react'

export default class Select extends Component{
    render() {
        return (
            <Fragment>
                <div className="form-group w-100 m-1">
                    <select className="form-control form-control-sm" id={`${this.props.id}`}>
                        {this.props.option}
                    </select>
                </div>
            </Fragment>
        )
    }
}