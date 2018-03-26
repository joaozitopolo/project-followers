
import React from 'react'
import PropTypes from 'prop-types'

export class LiftingList extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <h4>Liftings</h4>
            <ul className="uk-list liftings operations">
                {project.liftings.map(liftingListItem)}
            </ul>
        </React.Fragment>
    }
}

LiftingList.propTypes = {
    project: PropTypes.object
}

const liftingListItem = (lifting) => { 
    const position = messagePosition(lifting)
    return (
        <li key={lifting.file} className={'operation lifting ' + position}>
            <span className="file status">
                {lifting.file}
            </span>
            <span className="position status">
                {position ? ' (' + position + ')' : ''}
            </span>
            {lifting.remarks && !position &&
                <div className="remarks">
                    {lifting.remarks}
                </div>
            }
        </li>
    )
}

const messagePosition = (lifting) => {
    let msg = []
    if(lifting.stop) {
        msg.push("finished")
    } else if(lifting.start) {
        msg.push("started")
        if(lifting.continuous) {
            msg.push("continuous")
        }
    }
    return msg.length ? msg.join(', ') : null
}