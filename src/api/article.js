import http from './base/intercept'

export function getArticlePage(params) {
    return http.get('/article/page', params)
}

export function getArticleDetail(id) {
    return http.get(`/article/${id}`)
}

export function getHomeArticle() {
    return http.get('/article/latest')
}

export function getTimeline() {
    return http.get('/article/timeline')
}