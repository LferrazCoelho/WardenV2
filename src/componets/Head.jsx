import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import './index.css'
import './Head.css'

export default class Head extends Component{
    render() {
      const ResumePage = this.props.ResumePage
        return (
            <Fragment>
              <Nav
                titlepage={this.props.titlepage}
                userName={this.props.userName}
                avatar={this.props.avatar}
              />
              <div className={`header ${this.props.bgHead} bg-danger pb-8 pt-5 pt-md-8`}>
                <div className="container-fluid">
                  <div className="header-body">
                    <div className="row justify-content-md-center">
                      {ResumePage}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
        )
    }
}