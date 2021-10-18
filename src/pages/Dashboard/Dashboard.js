import React, { PureComponent } from 'react';
import Button from '../../components/Button/Button';

class Dashboard extends PureComponent{
    
    render(){
        return(
            <div>
                <h1>This is your Dashboard</h1>
                <Button pathName='inputItem' text='ADD ITEM' />
                <Button text='LOG OUT' />

            </div>
        );
    }
}

export default Dashboard;