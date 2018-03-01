
import React from 'react'
import PropTypes from 'prop-types'
import { BlockContainer } from '../containers';
import { TaskList } from './TaskList';


export class ProjectList extends React.Component {

    render() {
        return <React.Fragment>
            {this.props.projects.map(project => (
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