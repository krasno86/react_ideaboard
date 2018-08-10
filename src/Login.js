import React, { Component } from 'react'
import axios from 'axios'
// import { Redirect } from 'react-router-dom'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config) {
    const authHeaders = window.localStorage.getItem('jwt')
    if(authHeaders) {
        config.headers[config.method] = {
            'Authorization': `Bearer ${authHeaders}`
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error)
});

class Login extends Component {

    state = {
        // toIdeas: false,
        notification: ''
    }

    render() {
        // if (this.state.toIdeas) return <Redirect to='/ideas' />
        return (
            <div>
                <h1>Login</h1>
                <div className="email_input">
                    <label htmlFor="user_email">Email</label><br/>
                    <input autoFocus type="email" name="user[email]" id="user_email" />
                </div>
                <div className="password">
                    <label htmlFor="user_password">password</label><br/>
                    <input type="password" name="user[password]" id="user_password" />
                </div>
                <button className="login"
                        onClick={this.login} >
                    Log in
                </button>
                <span className="notification">
                  {this.state.notification}
                </span><br/>
            </div>
        );
    }

    login = () => {
        // this.setState({toDashboard: true})
        axios.post(
            'http://localhost:3001/session_controller/authenticate',
            {
                email: document.getElementById('user_email').value,
                password: document.getElementById('user_password').value
            }
        )
            .then(response => {
                localStorage.setItem('jwt', response.data.auth_token)
            })
            .then(() => this.props.history.push('/ideas'))
            // .then(() => this.setState(() => ({
            //     toIdeas: true
            // })))
            .catch(error => console.log(error))
    }

    resetNotification = () => {
        this.setState({notification: ''})
    }
}

export default Login