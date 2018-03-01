
export const services = {

    getProjects() {
        let url = '/repo/index.json'
        return fetch(url).then(data => data.json())
    }

}