import React, { Component, Fragment } from 'react'

export default class CardHead extends Component{
    render() {
        return (
            <Fragment>
                <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {this.props.title}
                    </button>
                    </h3>
                </div>
            </Fragment>
        )
    }
}