import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Card />
      </React.Fragment>
    );
  }
}
