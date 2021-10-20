import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { processAddItems } from '../../services/actions/ItemsActions';

class ConfirmItem extends PureComponent{

    constructor(props){
        super(props);
        this.populateAddedItems = this.populateAddedItems.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectPage = this.redirectPage.bind(this);
        this.state = {
            isSubmitted: false,
        }
    }

    handleSubmit(){
        const holder = localStorage.getItem('addedItems');
        const addedItems = JSON.parse(holder);

        this.setState({isSubmitted: true});

        processAddItems(addedItems);
    }

    redirectPage(){
        if(this.state.isSubmitted){
            return true;
        }else{
            return false;
        }
    }

    populateAddedItems(){
        const holder = localStorage.getItem('addedItems');
        const addedItems = JSON.parse(holder);

        return(
            <form onSubmit={this.handleSubmit}>
                <label><b>Name</b> : {addedItems.name}</label><br />
                <label><b>Quantity</b> : {addedItems.quantity}</label><br />
                <label><b>Price</b> : {addedItems.price}</label><br />
                <label><b>Condition</b> : {addedItems.condition}</label><br />
                <label><b>Category</b> : {addedItems.category}</label><br />
                <label><b>Stocked Date</b> : {addedItems.stockedDate}</label><br />

                <input type='submit' value='SUBMIT' />
            </form>
        );
    }
    
    render(){
        return(
            <div>
                <h1>This is your ConfirmItem</h1>
                {this.populateAddedItems()}
                {this.redirectPage() ? <Redirect push to='/resultItem' /> : null}
            </div>
        );
    }
}

export default ConfirmItem;