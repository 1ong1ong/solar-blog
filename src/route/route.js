import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


let routers = [
    {
        path: '/',
        redirect: '/pages/home'
    },
    {
        path: '/pages',
        component: () => import('@/pages/layout/Layout'),
        children: [
            {
                path: 'home',
                component: () => import('@/pages/home/Home'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'article/list',
                component: () => import('@/pages/articleList/ArticleList'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'article/detail',
                component: () => import('@/pages/articleDetail/ArticleDetail'),
                meta: {
                    keepAlive: false
                }
            },
            {
                path: 'timeline',
                component: () => import('@/pages/timeLine/TimeLine'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'friends',
                component: () => import('@/pages/friends/Friends'),
                meta: {
                    keepAlive: false
                }
            },
            {
                path: 'about',
                component: () => import('@/pages/about/About'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'tags/article/list',
                component: () => import('@/pages/tagArticleList/TagArticleList'),
                meta: {
                    keepAlive: false
                }
            },
            {
                path: 'tags',
                component: () => import('@/pages/tagList/TagList'),
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
];
const router = new Router({
    routes: routers,
    mode: 'history',
});

router.afterEach(() => {
    window.scrollTo(0,0);
});

export default router;