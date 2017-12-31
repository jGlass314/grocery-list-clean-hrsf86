import React from 'react';
import ReactDOM from 'react-dom';
import List from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';

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

  render() {
    console.log('call to render on index.jsx');
    return (
      <div>
        <GroceryList list={this.state.list} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
