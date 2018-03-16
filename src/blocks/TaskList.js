
import React from 'react'
import PropTypes from 'prop-types'

export class TaskList extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <h4>Tasks</h4>
            <ul className="uk-list">
                {project.tasks.map(task => (<li key={task.file}>{task.file}</li>))}
            </ul>
        </React.Fragment>
    }
}

TaskList.propTypes = {
    project: PropTypes.object
}