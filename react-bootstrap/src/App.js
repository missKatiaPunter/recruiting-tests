import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const App = () => (
  <div className="App">
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default App;
