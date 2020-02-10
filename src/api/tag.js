import http from './base/intercept'

export function getAllTags() {
    return http.get('/tags/all')
}