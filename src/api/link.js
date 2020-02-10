import http from './base/intercept'

export function getByType(type) {
    return http.get(`/links/type/${type}`)
}