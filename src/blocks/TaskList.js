
import React from 'react'
import PropTypes from 'prop-types'

export class TaskList extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <h4>Tasks</h4>
            <ul className="uk-list tasks operations">
                {project.tasks.map(taskListItem)}
            </ul>
        </React.Fragment>
    }
}

TaskList.propTypes = {
    project: PropTypes.object
}

const taskListItem = (task) => {
    const position = messagePosition(task)
    return (
        <li key={task.file} className={'operation task ' + position}>
            <span className="file status">
                {task.file}
            </span>
            <span className="position status">
                {position ? ' (' + position + ')' : ''}
            </span>
            {task.remarks && !position &&
                <div className="remarks">
                    {task.remarks}
                </div>
            }
        </li>
    )
}

const messagePosition = (lifting) => {
    if (lifting.stop) {
        return "finished"
    } else if (lifting.start) {
        return "started"
    }
    return null
}