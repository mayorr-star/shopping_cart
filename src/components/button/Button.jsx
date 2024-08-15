import { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type={this.props.type} className={this.props.cls} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string,
    cls: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
}

Button.defaultProps = {
    type: 'button',
  };

export default Button