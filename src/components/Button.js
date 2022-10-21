import React from "react";
import "./Button.css";

class Button extends React.Component{
    render() {
        return(
            <>
            <button
            onClick={this.props.increase}
            style={{backgroundColor:this.props.color}}
            >
            {this.props.task}
            </button>
            </>
            
        );
    }
}
 export default Button;