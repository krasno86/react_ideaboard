import React from "react";

class Contact extends React.Component {
    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <div className="contact-info">
                <div className="contact-number"> {this.props.phoneNumber} </div>
                <div className="contact-number"> {this.props.email} </div>
            </div>
        )
    }

    render() {
        return (
            <li className="contact" onClick = {this.handleClick}>
                <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                <div className="contact-name"> {this.props.name} </div>
                <div className="contact-info">
                    {this.getBody()}
                </div>
            </li>
        );
    }
}

export default Contact