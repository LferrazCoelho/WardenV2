import React, { Component, Fragment } from 'react'
import './index.css'
import './Head.css'
import DropNavUser from './DropNavUser'

export default class Head extends Component{
    render() {

      const resumePage = this.props.ResumePage
      const bgHead = this.props.bgHead
      
      return (
            <Fragment>
              <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                <div className="container-fluid">
                  {/* <!-- Brand --> */}
                  <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">{this.props.titlePage}</a>
                  {/* <!-- User --> */}
                  <ul className="navbar-nav align-items-center d-none d-md-flex">
                    <li className="nav-item dropdown">
                      <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media align-items-center">
                          <span className="border border-white avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src={this.props.avatar} />
                          </span>
                          <div className="media-body ml-2 d-none d-lg-block">
                            <span className="mb-0 text-sm  font-weight-bold">{this.props.userName}</span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                        <DropNavUser />
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className={` header ${ bgHead } pb-8 pt-5 pt-md-8 `}>
                <div className="container-fluid">
                  <div className="header-body">
                    {/* <!-- Card stats --> */}
                    <div className="row justify-content-md-center">
                      {resumePage}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
        )
    }
}