import React, { Component, Fragment } from 'react'

export default class Option extends Component{
    render() {
        return (
            <Fragment>
                <option>{this.props.value}</option>
            </Fragment>
        )
    }
}