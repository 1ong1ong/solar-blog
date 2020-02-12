import http from './base/intercept'

export function getConfig() {
    return http.get('/config')
}