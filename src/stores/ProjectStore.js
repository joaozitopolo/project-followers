
import { createStore, applyMiddleware } from 'redux'
import { services } from "../services";

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
                store.dispatch({ type: 'ADD_PROJECT', project: { ...action.project, tasks, liftings}})
            })

        default:
            return next(action)
    }
}

export const ProjectStore = createStore(reducer, state, applyMiddleware(middleware))