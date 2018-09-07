import React, { Component } from 'react'
import './ideas.css'
import './app.css'
import Hello from './Hello'
import ContactsList from './ContactsList'
import Registration from './Registration'
import Login from './Login'
import Counter from './Counter'
import ArticleList from './ArticleList'
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
                        <ul class="topnav">
                            <li><NavLink activeStyle = {{color: 'red'}} to='/home'>Home</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/datepicker'>datepicker</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/registration'>registration</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/login'>log in</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/hello'>hello</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/articles'>article list</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/counter'>counter</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/contacts'>contacts</NavLink></li>
                            <li><NavLink activeStyle = {{color: 'red'}} to='/ideas'>ideas</NavLink></li>
                        </ul>
                        <div className="root">
                            <div className="container">
                                <Route path = '/hello' component = {Hello}/>
                                <Route path = '/datepicker' component = {ReactDatePicker}/>
                                <Route path = '/contacts' component = {ContactsList}/>
                                <Route path = '/ideas' component = {IdeasContainer}/>
                                <Route path = '/counter' component = {Counter}/>
                                <Route path = '/articles' component = {ArticleList}/>
                                <Route path = '/registration' component = {Registration}/>
                                <Route path = '/login' component = {Login}/>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App