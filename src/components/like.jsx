import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() { 
        let classes = "fa fa-heart";
        if(!this.props.liked) classes+="-o"
        return <i 
        onClick={this.props.onClick} 
        className={classes} 
        style=  {{cursor:"Pointer"}}
        aria-hidden="true"></i>
        ;
    }
}
 
export default 
Like;