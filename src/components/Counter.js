import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends React.Component {
    static propTypes = {
        counter: PropTypes.number
    }

    render() {
        return (
            <div className='Hello'>
                <h2>{this.props.counter}</h2>
                <button className='btn btn-primary' onClick = {this.handleIncrement}>Increment counter</button>
            </div>
        )
    }
    handleIncrement = () => {
        this.props.increment()
    }
}

export default connect((state) => ({
    counter: state.count
}), {increment})(Counter)