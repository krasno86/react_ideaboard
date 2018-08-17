import {createSelector} from 'reselect'
import articles from "../reducers/articles";

const articlesGetter = state => state.articles

export const filtrateArticlesSelector = createSelector(articlesGetter, (articles) => {
    return articles
})
