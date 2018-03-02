
import { createStore, applyMiddleware } from 'redux'
import { services } from "../services";

const reducer = function(state = {}, action) {
    switch(action.type) {
        case 'PROJECTS':
            return { projects: action.projects }
        default:
            return state
    }
}

const state = {
    projects: []
}

const middleware = store => next => action => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return services.getProjects()
            .then(json => store.dispatch({ type: 'PROJECTS', projects: json.projects }))
        default:
            return next(action)
    }
}

export const ProjectStore = createStore(reducer, state, applyMiddleware(middleware))