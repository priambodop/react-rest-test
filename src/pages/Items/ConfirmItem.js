import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { processAddItems } from "../../services/actions/ItemsActions";

class ConfirmItem extends PureComponent {
  constructor(props) {
    super(props);
    this.populateAddedItems = this.populateAddedItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.backPage = this.backPage.bind(this);
    this.state = {
      isSubmitted: false,
      isBack: false
    };
  }

  handleSubmit() {
    const holder = localStorage.getItem("addedItems");
    const addedItems = JSON.parse(holder);

    this.setState({ isSubmitted: true });

    processAddItems(addedItems);
  }

  handleBack(){
    this.setState({isBack: true});
  }

  redirectPage() {
    if (this.state.isSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  backPage(){
      if(this.state.isBack){
        return true;
      }else{
          return false
      }
  }

  populateAddedItems() {
    const holder = localStorage.getItem("addedItems");
    const addedItems = JSON.parse(holder);

    return (
        <div className='container'>
      <form onSubmit={this.handleSubmit} className='formWrapper'>
        <ul>
          <li>
            <label>
              <b>Name</b>{" "}
            </label>
            <span>{addedItems.name}</span>
          </li>

          <li>
            <label>
              <b>Price</b>{" "}
            </label>
            <span>{addedItems.price}</span>
          </li>

          <li>
            <label>
              <b>Quantity</b>{" "}
            </label>
            <span>{addedItems.quantity}</span>
          </li>

          <li>
            <label>
              <b>Condition</b>{" "}
            </label>
            <span>{addedItems.condition}</span>
          </li>

          <li>
            <label>
              <b>Category</b>{" "}
            </label>
            <span>{addedItems.category}</span>
          </li>

          <li>
            <label>
              <b>Stocked Date</b>{" "}
            </label>
            <span>{addedItems.stockedDate}</span>
          </li>

        </ul>
          <div className='buttonWrapperDashboard'>
            <button onClick={this.handleBack}>CANCEL</button>
            <button type="submit">SUBMIT</button>
          </div>
      </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Please confirm your item</h1>
        {this.populateAddedItems()}
        {this.redirectPage() ? <Redirect push to="/resultItem" /> : null}
        {this.backPage() ? <Redirect to='/inputItem' /> : null}
      </div>
    );
  }
}

export default ConfirmItem;
