import React, { PureComponent } from "react";

class Items extends PureComponent{

    render(){
        const {name, quantity, price, condition, category, stockedDate} = this.props;
        return(
            <div>
                <h2>{name}</h2>
                <h2>{quantity}</h2>
                <h2>{price}</h2>
                <h2>{condition}</h2>
                <h2>{category}</h2>
                <h2>{stockedDate}</h2>
            </div>
        );
    }
}

export default Items