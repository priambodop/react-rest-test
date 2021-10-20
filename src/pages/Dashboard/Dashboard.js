import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import Items from "../../components/Items/Items";
import { processGetItemsCategory } from "../../services/actions/ItemsActions";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.populateItems = this.populateItems.bind(this);
    this.populateItemsList = this.populateItemsList.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.state = {
      isAddItem: false,
      isLogOut: false,
    };
  }

  handleAddItem() {
    processGetItemsCategory();
    this.setState({ isAddItem: true });
  }

  handleLogOut() {
    this.setState({ isLogOut: true });
  }

  redirectAddItem() {
    if (this.state.isAddItem) {
      return true;
    } else {
      return false;
    }
  }

  redirectLogOut() {
    if (this.state.isLogOut) {
      return true;
    } else {
      return false;
    }
  }

  populateItems() {
    const items = localStorage.getItem("items");
    const itemsJson = JSON.parse(items);

    let returnedItems = [];

    for (let i = 0; i < itemsJson.data.length; i++) {
      let item = itemsJson.data[i];

      returnedItems.push(
        <div key={`${i}_item`}>
          <Items
            name={item.name}
            quantity={items.quantity}
            price={item.price}
            condition={item.condition}
            category={item.category}
            stockedDate={item.stockedDate}
          />
        </div>
      );
    }

    return returnedItems;
  }

  populateItemsList() {
    const items = this.populateItems();

    return (<div>{items}</div>);
  }

  render() {
    return (
      <div>
        <h1>This is your Dashboard</h1>
        {this.populateItemsList()}
        <button onClick={this.handleAddItem}>ADD ITEM</button>
        <button onClick={this.handleLogOut}>LOG OUT</button>
        {this.redirectAddItem() ? <Redirect push to="/inputItem" /> : null}
        {this.redirectLogOut() ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Dashboard;
