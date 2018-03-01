import React, { Component } from 'react';
import './App.css';
import { ProjectList, Nav } from './blocks';
import { AppStore } from './stores/AppStore';

class App extends Component {

  constructor(props) {
    super(props)
    this.store = AppStore
    this.store.subscribe(() => this.setState(() => this.store.getState()))
    this.state = this.store.getState()
  }

  componentDidMount() {
    this.store.dispatch({type: 'GET_PROJECTS'})
  }

  render() {
    return <React.Fragment>
      <Nav />
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-1-1">
            <ProjectList projects={this.state.projects} />
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}

export default App;
