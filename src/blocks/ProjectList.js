
import React from 'react'
import PropTypes from 'prop-types'
import { BlockContainer } from '../containers';


export class ProjectList extends React.Component {

    render() {
        return <React.Fragment>
            <BlockContainer title="Projects" count={this.props.projects.length}>
            <ul>
                {this.props.projects.map(project => (
                    <li key={project.name}>{project.name}</li>
                ))}
            </ul>
            </BlockContainer>
        </React.Fragment>
    }
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}