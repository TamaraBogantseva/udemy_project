import React, { Component } from "react";
import './Panel.css';

class Panel extends Component {
    render() {
        return (
            <div className="Panel-container">
                <h3 className="Panel-title">{ this.props.titel }</h3>
                <p className="Panel-text">{ this.props.text }</p>
            </div>
        )
    }
}

export default Panel;

