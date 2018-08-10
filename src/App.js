import React, { Component } from 'react'
import './style.css'
import Hello from './Hello'
import ContactsList from './ContactsList'
import Registration from './Registration'
import Login from './Login'
import IdeasContainer from './IdeasContainer'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/home'>HOME</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/registration'>registration</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/login'>log in</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/hello'>hello</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/contacts'>contacts</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/ideas'>ideas</NavLink></div>
                    </div>
                    <div className="root">
                        <Route path = '/hello' component = {Hello}/>
                        <Route path = '/contacts' component = {ContactsList}/>
                        <Route path = '/ideas' component = {IdeasContainer}/>
                        <Route path = '/registration' component = {Registration}/>
                        <Route path = '/login' component = {Login}/>
                        <Route path = '/#' component = {App}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App