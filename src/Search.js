import React, { Component } from 'react';

class Search extends Component {
  render() {
    const filterVal = this.props.filterVal;
    return (
        <input
          type="text"
          ref="filterInput"
          placeholder="Type to filter.."
          // binding the input value to state
          value={filterVal}
          onChange={this.props.onChange}
        />
    );
  }
}

export default Search;
