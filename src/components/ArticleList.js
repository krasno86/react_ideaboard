import React from 'react'
import Article from './Article/index'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
// import { NavLink } from 'react-router-dom'
import {loadAllArticles} from '../AC/index'

class ArticleList extends React.Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.loadAllArticles()
    }

	render() {
        const { articles } = this.props
        const articleElements = articles.map(article => <li key = {article.id}>
            <Article article = {article}/>
        </li>
        )
        return  <ul>{articleElements}</ul>
    }
}

export default connect((state) => {
    return { articles: state.articles }
}, {loadAllArticles})