
import React from 'react'
import PropTypes from 'prop-types'


export class BlockContainer extends React.Component {

    render() {
        return <React.Fragment>
            <div>
                <h2>{this.props.title} {this.props.count ? `(${this.props.count})` : ''}</h2>
            </div>

            {this.props.children}
        </React.Fragment>
    }
}

BlockContainer.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number
}