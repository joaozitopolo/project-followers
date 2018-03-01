import React, { Component } from 'react';
import './App.css';
import { ProjectList } from './blocks';
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
      <h1>Projects Followers</h1>
      <ProjectList projects={this.state.projects} />
    </React.Fragment>
  }
}

export default App;
