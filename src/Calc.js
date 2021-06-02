import React, { Component } from 'react';

class Calc extends Component {
    render() {
        return(
            <React.StrictMode>
                <input
                type="button"
                value={this.props.data.label}
                onClick = {this.props.data.displayBox}
                />
            </React.StrictMode>
        )
    }
}

export default Calc;
