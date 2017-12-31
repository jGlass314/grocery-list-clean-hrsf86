import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <input type="text" size='20' placeholder="Description" ref={input => this._groceryDescription = input} />
        <input type="text" size='10' placeholder="Quantity" ref={input => this._groceryQuantity = input} />
        <button onClick={() => this.props.addGroceryFunction(this._groceryDescription.value, this._groceryQuantity.value)}>ADD</button>
      </div>
    )
  }
}

export default AddGrocery;
