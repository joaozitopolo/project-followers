import React, { Component } from 'react';
import './App.css';
import { ProjectList, Nav } from './blocks';

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <React.Fragment>
      <Nav />
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-1-1">
            <ProjectList />
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}

export default App;
