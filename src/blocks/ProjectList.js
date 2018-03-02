
import React from 'react'
import PropTypes from 'prop-types'
import { BlockContainer } from '../containers';
import { TaskList } from './TaskList';
import { ProjectStore } from '../stores/ProjectStore';


export class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.store = ProjectStore;
        this.store.subscribe(() => this.setState(() => this.store.getState()))
        this.state = this.store.getState();
    }

    componentDidMount() {
        this.store.dispatch({type: 'GET_PROJECTS'})
    }

    render() {
        return <React.Fragment>
            {this.state.projects.map(project => (
                <BlockContainer key={project.name} title={project.name} className="block-project">
                    <TaskList project={project} />
                </BlockContainer>
            ))}
        </React.Fragment>
    }
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}