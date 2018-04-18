
import React from 'react'
import PropTypes from 'prop-types'


export class BlockContainer extends React.Component {

    render() {
        return <React.Fragment>
            <ul data-uk-accordion className={this.props.className}>
                <li>
                    <a className="uk-accordion-title">{this.props.title}</a>
                    <div className="uk-accordion-content">
                        {this.props.children}
                    </div>
                </li>
            </ul>
        </React.Fragment>
    }
}

BlockContainer.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    className: PropTypes.string
}