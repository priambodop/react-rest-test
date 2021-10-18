import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Button extends PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        const {pathName, text} = this.props;
        return (
            <Link to={'/' + pathName}>
            <input 
                type="submit"
                value={text}
             />
        </Link>
        );
        
    }
}

Button.defaultProps = {
    pathName: '',
}

export default Button;