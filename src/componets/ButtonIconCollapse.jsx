import React, { Component, Fragment } from 'react'

export default class ButtonIcon extends Component{
    render() {
        return (
            <Fragment>
                <button className={`btn ${this.props.size} btn-icon btn-3 btn-${this.props.color} m-1`} type="button" data-toggle="collapse" data-target={`#${this.props.idCollapse}`} aria-expanded="false" aria-controls="collapseExample">
                    <span className="btn-inner--icon"><i className={`ni ni-${this.props.icon}`}></i></span>
                    <span className="btn-inner--text">{this.props.title}</span>
                </button>
            </Fragment>
        )
    }
}