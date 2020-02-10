import http from './base/intercept'

export function reply(data) {
    return http.post('/comment/reply', data)
}

export function getCommentList(articleId) {
    return http.get(`/comment/${articleId}`)
}