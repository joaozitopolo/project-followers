
import React from 'react'
import PropTypes from 'prop-types'

export class DisplayPoints extends React.Component {

    render() {
        let {project} = this.props
        return <React.Fragment>
            <div data-uk-grid className="uk-grid-divider">
                <div className="uk-width-1-3">
                    <h4>Lifted Points</h4>
                    <PointsList points={project.points.list(0)} />             
                </div>
                <div className="uk-width-1-3">
                    <h4>Points At work</h4>
                    <PointsList points={project.points.list(1)} />             
                </div>
                <div className="uk-width-1-3">
                    <h4>Finished Points</h4>
                    <PointsList points={project.points.list(2)} />             
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
