
import React from 'react';
import { BlockContainer } from '../containers';
import { ProjectStore } from '../stores/ProjectStore';
import { DisplayPoints } from './DisplayPoints';
import { LiftingList } from './LiftingList';
import { TaskList } from './TaskList';


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
                    <div data-uk-grid className="uk-grid-divider">
                        <div className="uk-width-1-2">
                            <LiftingList project={project} />
                        </div>
                        <div className="uk-width-1-2">
                            <TaskList project={project} />
                        </div>
                    </div>
                    <DisplayPoints project={project} />
                </BlockContainer>
            ))}
        </React.Fragment>
    }
}
