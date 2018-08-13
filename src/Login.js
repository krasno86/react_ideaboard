import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config) {
    const access_token = localStorage.getItem('access-token')
    if(access_token) {
        config.headers[config.method] = {
            'access-token': localStorage.getItem('access-token'),
            'client': localStorage.getItem('client'),
            // 'expiry': authHeaders['expiry'],
            'uid': localStorage.getItem('uid')
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error)
});

// axios.interceptors.response.use(function (response) {
//     if(response.headers['access-token']) {
//         const authHeaders = {
//             'access-token': response.headers['access-token'],
//             'client': response.headers['client'],
//             'uid': response.headers['uid'],
//             'expiry': response.headers['expiry'],
//             'token-type': response.headers['token-type']
//         }
//         window.localStorage.setItem('authHeaders', JSON.stringify(authHeaders));
//     } else {
//         window.localStorage.removeItem('authHeaders');
//     }
//     return response;
// }, function (error) {
//     return Promise.reject(error)
// });

class Login extends Component {

    state = {
        toIdeas: false,
        notification: ''
    }

    render() {
        if (this.state.toIdeas) return <Redirect to='/ideas' />
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
        axios.post(
            'http://localhost:3001/auth/sign_in',
            {
                email: document.getElementById('user_email').value,
                password: document.getElementById('user_password').value
            }
        )
            .then(response => {
                localStorage.setItem('access-token', response.headers['access-token'])
                localStorage.setItem('client', response.headers['client'])
                // localStorage.setItem('expiry', response.headers['expiry'])
                localStorage.setItem('uid', response.headers['uid'])
            })
            .then(() => this.props.history.push('/ideas'))
            .then(() => this.setState(() => ({
                toIdeas: true
            })))
            .catch(error => console.log(error))
    }

    resetNotification = () => {
        this.setState({notification: ''})
    }
}

export default Login