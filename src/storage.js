const PROJECT_PREFIX = "project_";

export default class Storage {
    saveProjectByName(project) {
        localStorage.setItem(PROJECT_PREFIX + project.name, JSON.stringify(project));
    }

    getProjectByName(name) {
        const project = localStorage.getItem(PROJECT_PREFIX + name);
        return project === null ? {} : JSON.parse(project);
    }

    getAllProjects() {
        let item, results = [];
        for (item in localStorage) {
            if (localStorage.hasOwnProperty(item)) {
                const regex = /project_.+/i;
                if(item.match(regex)) {
                    console.log(item);
                    const value = JSON.parse(localStorage.getItem(item));
                    results.push({key: item, val: value});
                }
            }
        }
        return results;
    }
}