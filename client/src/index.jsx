import React from 'react';
import ReactDOM from 'react-dom';
import List from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    this.setState({
      list: List.groceryList
    });
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
    console.log('call to render on index.jsx');
    return (
      <div>
        <GroceryList list={this.state.list} />
        <AddGrocery addGroceryFunction={this.addGrocery.bind(this)} />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
