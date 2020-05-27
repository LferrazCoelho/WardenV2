import React, { Component, Fragment } from 'react'
import './index.css'

export default class DropUser extends Component{
    render() {
        return(
            <Fragment>
                <div className="media align-items-center">
                    <span className="border border-white avatar avatar-sm rounded-circle">
                        <img alt="Image placeholder" src={this.props.avatar} />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm  font-weight-bold">{this.props.userName}</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}