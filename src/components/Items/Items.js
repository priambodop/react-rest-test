import React, { PureComponent } from "react";
import './Items.css';

class Items extends PureComponent{

    render(){
        const {key, name, quantity, price, condition, category, stockedDate} = this.props;
        return(
            <li className='items' key={key}>
                <h2>{name}</h2>
                <h2>{quantity}</h2>
                <h2>{price}</h2>
                <h2>{condition}</h2>
                <h2>{category}</h2>
                <h2>{stockedDate}</h2>
            </li>
        );
    }
}

export default Items