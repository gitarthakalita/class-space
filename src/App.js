import React from 'react';

import { BrowserRouter } from 'react-router-dom';



import './App.scss';

import BaseContainer from './components/layouts/base-container/base.component';


class App extends React.Component {


  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <BaseContainer />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
