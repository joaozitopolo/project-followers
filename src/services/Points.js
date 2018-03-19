/** Points mapping and filtering */

export class Points {


    constructor(points = {}) {
        this.points = points
    }
    

    /** sets a list of points from a owner */
    put(list, owner, owner_status) {
        let points = {...this.points}
        if(list) {
        list.forEach(name => {
            let p = (points[name] || new Point(name)).owner(owner, owner_status)
            points[name] = p
        })
        }
        return new Points(points)
    }


    /** return an ordered list of the points, optionally filtered by status */
    list(status) {
        let out = Object.values(this.points)
        if(status !== undefined) {
            out = out.filter(item => item.status == status)
        }
        out.sort((a, b) => {
            let compare = -(a.status - b.status)
            compare = compare || a.name.localeCompare(b.name)
            return compare
        })
        return out
    }


}


class Point {


    constructor(name, status = 0, owners = []) {
        this.name = name || ''
        this.status = status // 0:mapped 1:doing 2:done. Will be the best for all owners
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
