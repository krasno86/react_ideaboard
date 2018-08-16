import React from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import { NavLink } from 'react-router-dom'
import {loadAllArticles} from '../AC'

class ArticleList extends React.Component {
    static propTypes = {
        //from connect
        // articles: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.loadAllArticles()
    }

	render() {
        // console.log('========= Update articleList', this.props.articles.typeof())
        // console.log('========= Update articleList', this.props.articles.lengh())
        console.log('========= Update articleList', this.props)
        console.log('========= Update articleList', this.props.articles)
        console.log('========= Update articleList', this.props.articles.length)

        const {articles} = this.props
        // const articles = this.props.articles
        console.log('+++++++++++++', articles)

        const articleElements = articles.map(article => <li key = {article.id}>
                <Article article = {article}/>
            </li>
        )
        return(<ul>{articleElements}</ul>)

        // return  <ul>articleElements</ul>
    }
}

export default connect(state => {
    return { articles: state.articles }
}, {loadAllArticles})(ArticleList)

// export default connect((state) => {
//     return { articles: state.articles }
// })(ArticleList)