import React from 'react'
import Comment from './Comment'
import toggleOpen from "../decorators/toggleOpen";
import CommentForm from './CommentForm'

class CommentList extends React.Component {
    static defaultProps = {
        comments:  []
    }

	render() {
        const text = this.props.isOpen ? 'hide comments' : 'show comments'
        return (
	    	<div>
                <CommentForm /><br/>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>

	    )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>

        return (
            <div>
                <ul>
                    {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
                </ul>
                <CommentForm/>
            </div>
        )
    }
}

export default toggleOpen(CommentList)