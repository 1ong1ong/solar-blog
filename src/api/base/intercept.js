import axios from 'axios'
// import qs from 'qs'

import baseApi from './base'


const axiosInstance = axios.create({
    baseURL: baseApi, // api 的 base_url
    timeout: 900000 // 请求超时时间
});

axiosInstance.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
);

// axios拦截器的响应设置
axiosInstance.interceptors.response.use(
    response => {
        if (response && ((response.status >= 200 && response.status < 300)
            || response.status === 304 || response.status === 400)) {
            if (response.data.status === 'error') {
                this.$notification.error({
                    message: 'error',
                    description: response.data.msg
                });
                return Promise.reject('error')
            } else {
                return response.data
            }
        }
    },
    err => {
        return Promise.reject(err)
    }
)

// 请求方式的配置
export default {
    post(url, data) {
        return axiosInstance({
            method: 'post',
            url,
            data: JSON.stringify(data),
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'content-type': 'application/json; charset=utf-8'
            }
        })
    },
    get(url, params) {
        // get
        return axiosInstance({
            method: 'get',
            url,
            params, // get 请求时带的参数
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    },
    exportExcel(url, data, fileName) {
        return axios({
            url: url,
            baseURL: baseApi,
            method: 'post',
            data: JSON.stringify(data),
            responseType: 'blob',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'content-type': 'application/json; charset=utf-8'
            }
        }).then((res) => {
            if (res.status === 200) {
                let tempBlob = new Blob([res.data, {type: 'application/vnd.ms-excel:charset=utf-8'}]);
                let targetUrl = window.URL.createObjectURL(tempBlob);
                let a = document.createElement('a');
                a.href = targetUrl;
                a.download = `${fileName}_${new Date().toLocaleString()}.xlsx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                this.$notification.error({
                    message: '请求资源失败'
                })
            }
        }).catch(e => console.error(e))
    },
}
