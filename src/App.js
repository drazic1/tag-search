import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Tag from './Tag';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tags: ['dog', 'cat', 'bird', 'other dog'],
      filterText: ''
    };
    //binding this to the function since react does not bind automatically when using ES6 classes
    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(event) {
    this.setState({
      filterText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Type something in the search box to filter tags
        </p>
        <div>
          <Search onChange={this.filterUpdate} />
          {this.state.tags
            .filter(aTag => aTag.toLowerCase().includes(this.state.filterText))
            .map((filteredTag, id) => <Tag tagName={filteredTag} key={id} />)}
        </div>
      </div>
    );
  }
}

export default App;
