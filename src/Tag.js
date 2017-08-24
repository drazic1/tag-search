import React, { Component } from 'react';

class Tag extends Component {
  render() {
    return (
      <p>
        {this.props.tagName}
      </p>
    );
  }
}

export default Tag;
