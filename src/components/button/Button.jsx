import { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type={this.props.type} onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps = {
    type: 'button',
  };

export default Button