import React, { Component } from 'react';
import './App.css';
import { services } from './services';
import { ProjectList } from './blocks';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    services.getProjects().then(data => this.setState(old => { return { projects: data.projects }}))
  }

  render() {
    return <React.Fragment>
      <h1>Projects Followers</h1>
      <ProjectList projects={this.state.projects} />
    </React.Fragment>
  }
}

export default App;
