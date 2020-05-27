import React, { Component, Fragment } from 'react'

export default class DropNavUser extends Component{
    render() {
        return(
            <Fragment>
                <div class=" dropdown-header noti-title">
                    <h5 class="text-overflow  text-danger m-0">Bem vindo!</h5>
                </div>
                <a href="../examples/profile.html" class="dropdown-item">
                    <i class="ni ni-single-02 text-danger"></i>
                    <span>Perfil</span>
                </a>
                <a href="../examples/profile.html" class="dropdown-item">
                    <i class="ni ni-settings-gear-65 text-danger"></i>
                    <span>Configurações</span>
                </a>
                <a href="../examples/profile.html" class="dropdown-item">
                    <i class="ni ni-support-16 text-danger"></i>
                    <span>Suporte</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="http://localhost:3000/login" class="dropdown-item">
                    <i class="ni ni-user-run text-danger"></i>
                    <span>Sair</span>
                </a>
            </Fragment>
        )
}
}