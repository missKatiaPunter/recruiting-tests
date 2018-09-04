import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar';
import Form from './Form';
import Cards from './Cards';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <Form />
        <Cards />
      </React.Fragment>
    );
  }
}

