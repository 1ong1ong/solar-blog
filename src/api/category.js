import http from './base/intercept'

export function getAllCategories() {
    return http.get('/category/all')
}