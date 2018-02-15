import React, { Component } from 'react';
import './App.css';
import func from './utils/App.functions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    func.getAllUsers("/api/getAllUsers").then(res => {
      this.setState({
        users: res
      })
    })
  }
  
  render() {
    let formattedUsers = this.state.users.map(x => {
      return (
        <div key={i}>
          <h3>{x.name.first} + ' ' + {x.name.last}</h3>
        </div>
      )
    })
    return (
      <div className="App">
        {formattedUsers}
      </div>
    );
  }
}

export default App;
