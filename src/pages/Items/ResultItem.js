import React, { PureComponent } from "react";
import { Redirect } from "react-router";

class ResultItem extends PureComponent {
  constructor(props) {
    super(props);
    this.updateListItems = this.updateListItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isDone: false,
    };
  }

  handleClick() {
    this.updateListItems();
    this.setState({ isDone: true });
  }

  redirectPage() {
    if (this.state.isDone) {
      return true;
    } else {
      return false;
    }
  }

  updateListItems() {
    const addedItemHolder = localStorage.getItem("addedItems");
    const addedItem = JSON.parse(addedItemHolder);

    const itemHolder = localStorage.getItem("items");
    const items = JSON.parse(itemHolder);
    const listItems = items.data;

    listItems.push(addedItem);

    items.data = listItems;
    items.size += 1;

    const updatedItems = JSON.stringify(items);

    localStorage.setItem("items", updatedItems);
  }

  render() {
    return (
      <div>
        <h1>This is your ResultItem</h1>
        <button onClick={this.handleClick}>DONE</button>
        {this.redirectPage() ? <Redirect to='/dashboard' /> : null}
      </div>
    );
  }
}

export default ResultItem;
