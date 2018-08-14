import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import CommentList from '../CommentList'
// import {connect} from 'react-redux'
import '../Article/style.css'
import index from "../../reducers"

class Index extends Component {
	static propTypes = {
	 	id: PropTypes.string.isRequired,
	 	//from connect
		article: PropTypes.shape({
			 id: PropTypes.string.isRequired,
			 title: PropTypes.string.isRequired,
			 text: PropTypes.string.isRequired
		 }).isRequired
		// isOpen: PropTypes.bool,
		// toggleOpen: PropTypes.func
	}

	// componentDidMount(){
     //    const {article} = this.props
     //    if (!article || !article.text) return null
	// }

	render() {
		const {article, isOpen, toggleOpen} = this.props
        if (!article) return null
		return (
			<div ref = 'container'>
				<h2 >{article.title}</h2>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {/*<button onClick = {this.handleDelete}>Delete article</button>*/}

					{this.getBody()}
			</div>
		)
	}

    // handleDelete = () => {
    //     const {deleteArticle, article} = this.props
		// deleteArticle(article.id)
    // }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) {
            return null
        }
        return (
        	<section>
				{article.text}
				{/*<CommentList comments = {article.comments}/>*/}
        	</section>
    	)
    }
}

export default index

// export default connect((state, ownProps) => ({
//     article: state.articles.find(article => article.id === ownProps.id)
// }), { deleteArticle })(Index)