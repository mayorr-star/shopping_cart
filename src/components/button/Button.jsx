import { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type={this.props.type} className={this.props.cls}>{this.props.children}</button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    cls: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    type: 'button',
  };

export default Button