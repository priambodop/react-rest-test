import React, { PureComponent } from 'react';
import Button from '../../components/Button/Button';

class InputItem extends PureComponent{
    
    render(){
        return(
            <div>
                <h1>This is your InputItem</h1>
                <Button pathName='confirmItem' text='CONFIRM' />
            </div>
        );
    }
}

export default InputItem;