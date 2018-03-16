
import React from 'react'
import PropTypes from 'prop-types'

export class LiftingList extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <h4>Liftings</h4>
            <ul className="uk-list">
                {project.liftings.map(liftingListItem)}
            </ul>
        </React.Fragment>
    }
}

LiftingList.propTypes = {
    project: PropTypes.object
}

const liftingListItem = (lifting) => (
    <li key={lifting.file}>
        {lifting.file}
        <span>
            {messagePosition(lifting) ? ' (' + messagePosition(lifting) + ')' : ''}
        </span>
    </li>
)

const messagePosition = (lifting) => {
    if(lifting.stop) {
        return "finished"
    } else if(lifting.start) {
        return "started"
    }
    return null
}