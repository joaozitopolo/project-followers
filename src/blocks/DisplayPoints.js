
import React from 'react'
import PropTypes from 'prop-types'

export class DisplayPoints extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <h4>Points</h4>
            <ul className="uk-list points">
                {Object.values(project.points.points).map(pointsListItem)}
            </ul>
        </React.Fragment>
    }
}

DisplayPoints.propTypes = {
    project: PropTypes.object
}

const pointsListItem = (point) => (
    <li key={point.name} className={`status${point.status}`}>
        {point.name}
    </li>
)
