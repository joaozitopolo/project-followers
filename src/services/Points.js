/** Points mapping and filtering */

export class Points {

    constructor(points = {}) {
        this.points = points
    }
    
    /** sets a list of points from a owner */
    put(list, owner, owner_status) {
        let points = {}
        this.points.forEach(name => {
            let p = (this.points[name] || new Point(name)).owner(owner, owner_status)
            points[name] = p
        })
        return new Points(points)
    }

}

class Point {

    constructor(name, status = 0, owners = {}) {
        this.name = name
        this.status = status // 0:mapped 1:doing 2:done. Best for all owners
        this.owners = owners
    }

    /** add a owner, the owner status, and sets global status */
    owner(owner, owner_status) {
        let { name, status, owners } = this
        owners.push({owner, owner_status})
        status = owner_status == 1 || status == 1 ? 1 : owner_status == 2 ? 2 : status 
        return new Point(name, status, owners)
    }

}
