
import React from 'react'
import PropTypes from 'prop-types'
import { TaskStore } from '../stores/TaskStore';


export class TaskList extends React.Component {

    constructor(props) {
        super(props)
        this.store = TaskStore
        this.store.subscribe(() => this.setState(() => this.store.getState()))
        this.state = this.store.getState()
    }

    componentDidMount() {
        this.store.dispatch({ type: 'GET_TASKS', project: this.props.project })
    }


    render() {
        return <React.Fragment>
            <h4>Tasks</h4>
            <ul className="uk-list">
                {this.state.tasks.tasks.map(task => (<li key={task.file}>{task.file}</li>))}
            </ul>
            <h4>Points</h4>
            <div className="points">
                {this.state.tasks.points.map(point => (<span className="uk-label" key={point}>{point}</span>))}
            </div>
        </React.Fragment>
    }
}

TaskList.propTypes = {
    project: PropTypes.object
}