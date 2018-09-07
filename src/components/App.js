import React, { Component } from 'react'
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
import './ideas.css'
import './app.css'

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <div>
                        <div className="header">
                            <div className="container">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    {/*<li><NavLink activeStyle = {{color: 'red'}} to='/home'>HOME</NavLink></li>*/}
                                    <a className="navbar-brand" href="#">Navbar</a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" 
                                                                    data-target="#navbarNavAltMarkup" 
                                                                    aria-controls="navbarNavAltMarkup"
                                                                    aria-expanded="false" 
                                                                    aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/datepicker'>datepicker</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/registration'>registration</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/login'>log in</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/hello'>hello</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/articles'>article list</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/counter'>Counter</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/contacts'>contacts</NavLink>
                                            <NavLink className="nav-item nav-link" activeStyle = {{color: 'red'}} to='/ideas'>ideas</NavLink>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
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
                                {/*<Route path = '/#' component = {App}/>*/}
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App