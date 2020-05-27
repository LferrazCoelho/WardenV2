import React, { Component, Fragment } from 'react'

export default class Select extends Component{
    render() {

        var {bgOption, childBg, titleSelect} = this.props

        if (bgOption == null) {
            bgOption = []
        }

        return (
            <Fragment>
                <div className="form-group w-100 m-1">
                    <select className="form-control form-control-sm" id={`${this.props.id}`}>
                        <option>{titleSelect}</option>
                        {bgOption.map(function(result) {
                            return (
                            <option>{result[childBg]}</option>
                            )
                            })
                        }
                    </select>
                </div>
            </Fragment>
        )
    }
}