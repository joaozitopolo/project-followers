
import React from 'react'
import PropTypes from 'prop-types'

export class DisplayPoints extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <h4>Points</h4>
            <div data-uk-grid className="uk-grid-divider">
                <div className="uk-width-1-3">
                    <PointsList points={project.points.list(2)} />             
                </div>
                <div className="uk-width-1-3">
                    <PointsList points={project.points.list(1)} />             
                </div>
                <div className="uk-width-1-3">
                    <PointsList points={project.points.list(0)} />             
                </div>
            </div>
        </React.Fragment>
    }
}

DisplayPoints.propTypes = {
    project: PropTypes.object
}

const PointsList = ({points}) => (
    <ul className="uk-list points">
        {points.map(pointsListItem)}
    </ul>
)

const pointsListItem = (point) => (
    <li key={point.name} className={`status${point.status}`}>
        {point.name}
    </li>
)
