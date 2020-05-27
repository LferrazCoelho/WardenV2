import React, { Component, Fragment } from 'react'

export default class IconButton extends Component{
    render() {
        return (
            <Fragment>
                <button className={`btn ${this.props.size} btn-icon btn-3 btn-${this.props.color} m-1`} type="button">
                    <span className="btn-inner--icon"><i className={`ni ni-${this.props.icon}`}></i></span>
                </button>
            </Fragment>
        )
    }
}