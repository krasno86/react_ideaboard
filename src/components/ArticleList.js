import React from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import { NavLink } from 'react-router-dom'
import {loadAllArticles} from '../AC'
import {filtrateArticlesSelector} from '../selectors'

class ArticleList extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.props.loadAllArticles()
        console.log('CONSTRUCTOR--------------------------')
    }
    static propTypes = {

        //from connect
        articles: PropTypes.array.isRequired
    }

    componentDidMount(){
        console.log('componentDidMount--------------------------')
        // this.props.loadAllArticles()
    }

	render() {
        // console.log('========= Update articleList', this.props.articles.typeof())
        // console.log('========= Update articleList', this.props.articles.lengh())
        console.log('========= RENDER    Update articleList', this.props.articles)
        // console.log('========= Update articleList', this.props.articles)
        // console.log('========= Update articleList', this.props.articles.length)

        let {articles} = this.props
        console.log('articles.length === 0: ', articles)
        articles = typeof articles === 'Object' ? [] : articles;
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
    console.log('-----------  connect', state)
    return { articles: state.articles }
    // return { articles: filtrateArticlesSelector(state) }
}, {loadAllArticles})(ArticleList)

// export default connect((state) => {
//     return { articles: state.articles }
// })(ArticleList)