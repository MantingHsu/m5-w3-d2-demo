import React, { Component } from 'react';
import Lists from './Lists';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      alldata: []
    };
  }

  handleClick = () => {
    this.setState({ loading: true });
    fetch('http://localhost:5000/lists')
      .then(response => response.json())
      .then(json => this.setState({ alldata: json, loading: false }))
      .catch(err => console.log(err));
  };

  render() {
    let output =
      this.state.loading ? (
        <p>Loading...</p>
      ) : (
        <Lists data={this.state.alldata} />
      );

    return (
      <div className="container">
        <h1>CRUD Demo</h1>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Get Lists
        </button>
        {output}
      </div>
    );
  }
}

export default App;