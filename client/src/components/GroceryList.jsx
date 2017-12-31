import React from 'react';
import GroceryItem from './GroceryItem.jsx';
import AddGrocery from './AddGrocery.jsx';
import $ from 'jquery';

// const GroceryList = (props) => (
class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }
  }

  addGrocery(description, quantity) {
    var tempList = this.state.list.slice();
    var found = false;
    tempList.forEach((item) => {
      if(item.description.toLowerCase() === description.toLowerCase()) {
        item.quantity = quantity;
        found = true;
      }
    });
    if(!found) {
      tempList.push({id: tempList.length+1, quantity: quantity, description: description});
    }
    this.setState({
      list: tempList
    });
  }

  render() {
    return (
      <div className="groceries">
        <table>
          <thead>
          <tr>
            <th colSpan="2">Item</th>
            <th colSpan="2">Quantity</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.list.map((item) => {
              return (
                <GroceryItem listItem={item} />
              );
            })
          }
        </tbody>
        </table>
        <AddGrocery addGroceryFunction={this.addGrocery.bind(this)} />
      </div>
    )
  }
}

export default GroceryList;
