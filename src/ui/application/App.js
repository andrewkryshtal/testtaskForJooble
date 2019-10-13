import React, { Component } from 'react';
// import { base } from './base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() { 
    return ( 
      <h2>test</h2>
     );
  }
}

export default App;
