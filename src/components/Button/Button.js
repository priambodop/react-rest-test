import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const {onClick} = this.props;
    if(onClick){
        onClick();
    }
  }

  render() {
    const { pathName, text, } = this.props;
    return (
      <Link to={'/' + pathName}>
        <button onClick={this.handleClick}>
            {text}
        </button>
      </Link>
    );
  }
}

Button.defaultProps = {
  pathName: "",
};

export default Button;
