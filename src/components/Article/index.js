import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import CommentList from '../CommentList'
import '../Article/style.css'

class Index extends Component {
	static propTypes = {
	 	//from connect
		article: PropTypes.shape({
			 id: PropTypes.number.isRequired,
			 title: PropTypes.string.isRequired,
			 text: PropTypes.string.isRequired
		 }).isRequired
	}

	render() {
		const {article} = this.props;
        if (!article) return null;
		return (
			<div ref = 'container'>
				<h2>{article.title}</h2>
                <p>{article.text}</p>
			</div>
		)
	}

}

export default Index
