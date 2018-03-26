
import { createStore, applyMiddleware } from 'redux'
import { services } from "../services";
import { Points } from '../services/Points';

const state = {
    projects: []
}

const reducer = function(state = {}, {type, project}) {
    switch(type) {
        case 'ADD_PROJECT':
            let projects = [ ...state.projects, project ]
            return { ...state, projects }
        default:
            return state
    }
}

const middleware = store => next => action => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return services.getProjects()
            .then(json => json.projects)
            .then(projects => { 
                projects.forEach(project => {
                    store.dispatch({type: 'GET_PROJECT', project})                    
                })
            })
        case 'GET_PROJECT':
            return Promise.all([
                services.getTasks(action.project),
                services.getLiftings(action.project)
            ]).then(([tasks, liftings]) => {
                let project = { ...action.project, tasks, liftings }
                project.points = evalPoints(project)
                store.dispatch({ type: 'ADD_PROJECT', project})
            })

        default:
            return next(action)
    }
}

export const ProjectStore = createStore(reducer, state, applyMiddleware(middleware))

const evalPoints = (project) => {
    let points = new Points()

    // listed points
    project.liftings.forEach(lifting => {
        points = points.put(lifting.points, `lifting ${lifting.file}`, 0)
    })

    // mapped for execution points
    project.tasks.forEach(task => {
        points = points.put(task.points, `task ${task.file}`, evalStatus(task))
    })

    // finish
    return points
}

const evalStatus = (item) => {
    return item.stop ? 2 : item.start ? 1 : 0
}