import React, { Component } from 'react'
import './style.css'
import Hello from './Hello'
import ContactsList from './ContactsList'
import IdeasContainer from './IdeasContainer'

class App extends Component {
    render() {
        return (
            <div className="root">
                {/*<Hello />*/}
                {/*<ContactsList />*/}
                <IdeasContainer />
            </div>
        );
    }
}

export default App