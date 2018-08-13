import React, { Component } from 'react'
import './ideas.css'
import Hello from './Hello'
import ContactsList from './ContactsList'
import Registration from './Registration'
import Login from './Login'
import Counter from './Counter'
import ReactDatePicker from './ReactDatePicker'
import IdeasContainer from './IdeasContainer'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import store from '../store'
import {Provider} from "react-redux"

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <div>
                        <div>
                            <h2>Main menu</h2>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/home'>HOME</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/datepicker'>datepicker</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/registration'>registration</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/login'>log in</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/hello'>hello</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/counter'>Counter</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/contacts'>contacts</NavLink></div>
                            <div><NavLink activeStyle = {{color: 'red'}} to='/ideas'>ideas</NavLink></div>
                        </div>
                        <div className="root">
                            <Route path = '/hello' component = {Hello}/>
                            <Route path = '/datepicker' component = {ReactDatePicker}/>
                            <Route path = '/contacts' component = {ContactsList}/>
                            <Route path = '/ideas' component = {IdeasContainer}/>
                            <Route path = '/counter' component = {Counter}/>
                            <Route path = '/registration' component = {Registration}/>
                            <Route path = '/login' component = {Login}/>
                            <Route path = '/#' component = {App}/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App