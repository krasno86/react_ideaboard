import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Idea extends Component {
    static propTypes = {
        idea: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        }).isRequired,
        handleDelete: PropTypes.func,
        handleClick: PropTypes.func
    }

    handleClick = () => {
        this.props.onClick(this.props.idea.id)
    }

    render () {
        return(
            <div className="tile">
                 <span className="deleteButton" onClick={this.handleDelete}>
                     x
                 </span>
                <h4 onClick={this.handleClick}>
                    {this.props.idea.title}
                </h4>
                <p onClick={this.handleClick}>
                    {this.props.idea.body}
                </p>
            </div>
        )
    }

    handleDelete = () => {
        this.props.onDelete(this.props.idea.id)
    }
}

export default Idea