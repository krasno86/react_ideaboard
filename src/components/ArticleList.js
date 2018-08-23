import React from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadAllArticles} from '../AC'
// import {filtrateArticlesSelector} from '../selectors'

class ArticleList extends React.Component {

    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.loadAllArticles()
    }

	render() {
        let {articles} = this.props
        const articleElements = articles.map(article => <li key = {article.id}>
                <Article article = {article}/>
            </li>
        )
        return(<ul>{articleElements}</ul>)
    }
}

export default connect(state => {
    return { articles: state.articles }
    // return { articles: filtrateArticlesSelector(state) }
}, {loadAllArticles})(ArticleList)
