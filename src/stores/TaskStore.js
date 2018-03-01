
import { createStore, applyMiddleware } from 'redux'
import { services } from "../services";

const reducer = function(state = {}, {type, tasks}) {
    switch(type) {
        case 'TASKS':
            return { tasks }
        default:
            return state
    }
}

const state = {
    tasks: {
        points: [],
        tasks: []
    }
}

const middleware = store => next => action => {
    let {type, project} = action
    switch(type) {
        case 'GET_TASKS':
            return services.getTasks(project)
            .then(json => store.dispatch({ type: 'TASKS', tasks: json }))
        default:
            return next(action)
    }
}

export const TaskStore = createStore(reducer, state, applyMiddleware(middleware))