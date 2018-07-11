import React, { Component } from 'react'
import './style.css'
import Hello from './Hello'
import ContactsList from './ContactsList'
import IdeasContainer from './IdeasContainer'
import { HashRouter, Route, Link, NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/home'>HOME</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/hello'>hello</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/contacts'>contacts</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/ideas'>ideas</NavLink></div>
                    </div>
                    <div className="root">
                        <Route path = '/hello' component = {Hello}/>
                        <Route path = '/contacts' component = {ContactsList}/>
                        <Route path = '/ideas' component = {IdeasContainer}/>
                        <Route path = '/#' component = {App}/>
                        {/*<IdeasContainer />*/}
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App