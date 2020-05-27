import React from 'react';

function BgHead(props) {
        if ( props.status  === "0" ) {
            return ( "bg-gradient-primary" )
        }else{
            return ( "this.props.bgHead" )
        }
}

export default BgHead;