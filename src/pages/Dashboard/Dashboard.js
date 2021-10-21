import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import Items from "../../components/Items/Items";
import { processGetItemsCategory } from "../../services/actions/ItemsActions";
import "./Dashboard.css";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.populateItems = this.populateItems.bind(this);
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
        <Items
          key={`${i}_item`}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          condition={item.condition}
          category={item.category}
          stockedDate={item.stockedDate}
        />
      );
    }

    return returnedItems;
  }

  render() {
    return (
      <div className="containerDashboard">
        <h1>This is your Dashboard</h1>
        <form className="formWrapperDashboard">
          <ul>{this.populateItems()}</ul>
          <div className="buttonWrapperDashboard">
            <button onClick={this.handleAddItem}>ADD ITEM</button>
            <button onClick={this.handleLogOut}>LOG OUT</button>
          </div>
        </form>

        {this.redirectAddItem() ? <Redirect push to="/inputItem" /> : null}
        {this.redirectLogOut() ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Dashboard;
