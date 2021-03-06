import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Registration extends Component {

    state = {
        toIdeas: false,
        notification: ''
    }

    render() {
        if (this.state.toIdeas) return <Redirect to='/ideas' />
        return (
            <div>
                <h1>Registration</h1>
                <div className="email_input">
                    <label htmlFor="user_email">Email</label><br/>
                    <input autoFocus type="email" name="user[email]" id="user_email" />
                </div>
                <div className="password">
                    <label htmlFor="user_password">password</label><br/>
                    <input type="password" name="user[password]" id="user_password" />
                </div>
                <div className="password_confirmation">
                    <label htmlFor="user_password_confirmation">password</label><br/>
                    <input type="password" name="user[password_confirmation]" id="user_password_confirmation" />
                </div>
                <button className="register"
                        onClick={this.register} >
                    Register
                </button>
                <span className="notification">
                  {this.state.notification}
                </span><br/>

            </div>
        );
    }

    register = () => {
        axios.post(
            'http://localhost:3001/auth',
            {
                email: document.getElementById('user_email').value,
                password: document.getElementById('user_password').value
            }
        )
            .then(response => {
                localStorage.setItem('access-token', response.headers['access-token'])
                localStorage.setItem('client', response.headers['client'])
                localStorage.setItem('uid', response.headers['uid'])
            })
            // .then(() => this.props.history.push('/ideas'))
            .then(() => this.setState(() => ({
                toIdeas: true
            })))
            .catch(error => console.log(error))
    }

    resetNotification = () => {
        this.setState({notification: ''})
    }

}

export default Registration