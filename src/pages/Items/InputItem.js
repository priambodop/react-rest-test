import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

class InputItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.populateCategories = this.populateCategories.bind(this);
    this.populateListCategories = this.populateListCategories.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
    this.state = {
      name: "",
      quantity: "",
      price: "",
      stockedDate: "",
      condition: "",
      category: "",
      isSubmitted: false,
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let itemsData = {};

    itemsData.name = this.state.name;
    itemsData.quantity = this.state.quantity;
    itemsData.price = this.state.price;
    itemsData.stockedDate = this.state.stockedDate;
    itemsData.condition = this.state.condition;
    itemsData.category = this.state.category;

    this.setState({isSubmitted: true})

    localStorage.setItem('addedItems', JSON.stringify(itemsData));
  }

  redirectPage(){
    if(this.state.isSubmitted){
      return true;
    }else{
      return false;
    }
  }

  populateCategories(){
      const categoriesHolder = localStorage.getItem('categories');
      const categories = JSON.parse(categoriesHolder);
      let result = [];

      for(let i = 0; i < categories.length; i++){
        result.push(
            <option key={`${i}_yes`} value={categories[i].name} />
        );
      }

      return result;
  }

  populateListCategories(){
      const options = this.populateCategories();
      return(
          <div>
              <datalist id='categories'>
                {options}
              </datalist>
          </div>
      );
  }

  populateForms() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Quantity:{" "}
            <input
              name="quantity"
              type="number"
              min='1'
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Price:{" "}
            <input
              name="price"
              type="number"
              min="1"
              step="any"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Condition:{" "}
            <input
              name="condition"
              type="text"
              value={this.state.condition}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Category:{" "}
            <input
              name="category"
              list="categories"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </label>
          {this.populateListCategories()}

          <label>
            Stocked Date:{" "}
            <input
              name="stockedDate"
              type="date"
              value={this.state.stockedDate}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <br />
          <input type="submit" value="CONFIRM" />
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>This is your Input Item</h1>
        {this.populateForms()}
        {this.redirectPage() ? <Redirect push to='/confirmItem' /> : null}
      </div>
    );
  }
}

export default InputItem;
