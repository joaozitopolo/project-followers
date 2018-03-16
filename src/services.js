
export const services = {

    getProjects() {
        let url = '/repo/index.json'
        return fetch(url).then(response => response.json())
    },

    getTasks(project) {
        let url = `/repo/${project.path}/tasks.json`
        return fetch(url).then(response => response.json())
    },

    getLiftings(project) {
        let url = `/repo/${project.path}/liftings.json`
        return fetch(url).then(response => response.json())
    },


}