import React, { Component, Fragment } from 'react'

export default class Input extends Component{
    render() {
        return (
            <Fragment>
                <div className="form-group w-100 m-1">
                    <input type={`${this.props.type}`} className="form-control form-control-sm" id={`${this.props.id}`} placeholder={`${this.props.placeholder}`} />
                </div>
            </Fragment>
        )
    }
}