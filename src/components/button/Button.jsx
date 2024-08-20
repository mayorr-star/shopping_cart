import PropTypes from "prop-types";
import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type={this.props.type}
        className={this.props.cls}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  cls: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

class CardButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onClick}
        aria-label={this.props.ariaLabel}
        className={this.props.cls}
      >
        {this.props.children}
      </button>
    );
  }
}
export { CardButton };

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  cls: PropTypes.string
};

export default Button;
