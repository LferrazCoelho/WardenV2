import React, { Component, Fragment } from 'react'

export default class ScrollPage extends Component{
    render() {
        return(
            <Fragment>            
                <nav className="mr-0 ml-0 mt-4 mb-4" aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1">
                                <i className="fa fa-angle-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">{this.props.numPageBack}</a></li>
                        <li className="page-item active"><a className="page-link" href="#">{this.props.numPageCurrent}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{this.props.numPageNext}</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                <i className="fa fa-angle-right"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}    