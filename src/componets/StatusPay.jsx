import React from 'react';

function StatusPay(props) {
        if ( props.status  === "0" ) {
            return (
                <React.Fragment>
                    <span className="badge badge-dot mr-4">
                        <i className="bg-success"></i>Ativado
                    </span>
                </React.Fragment>
            )
        }else{
            return (
                <React.Fragment>
                    <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i>Desativado
                    </span>
                </React.Fragment>
            )
        }
}

export default StatusPay;