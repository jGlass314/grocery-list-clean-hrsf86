import React from 'react';
import GroceryItem from './GroceryItem.jsx';

// const GroceryList = (props) => (
class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
      </div>
    )
  }
}

export default GroceryList;
