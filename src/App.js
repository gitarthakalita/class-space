import React from 'react';
import * as V from 'victory';


import './App.scss';
import TestReport from './components/test-report/test-report';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <TestReport/>
      </div>
    );
  }
}

export default App;
