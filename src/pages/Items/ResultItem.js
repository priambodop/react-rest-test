import React, { PureComponent } from 'react';
import Button from '../../components/Button/Button';

class ResultItem extends PureComponent{
    
    render(){
        return(
            <div>
                <h1>This is your ResultItem</h1>
                <Button pathName='dashboard' text='DONE' />
            </div>
        );
    }
}

export default ResultItem;