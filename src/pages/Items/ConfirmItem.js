import React, { PureComponent } from 'react';
import Button from '../../components/Button/Button';

class ConfirmItem extends PureComponent{
    
    render(){
        return(
            <div>
                <h1>This is your ConfirmItem</h1>
                <Button pathName='resultItem' text='SUBMIT' />
            </div>
        );
    }
}

export default ConfirmItem;