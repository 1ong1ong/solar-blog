import Vue from 'vue'
import Router from 'vue-router'

import Friends from '@/pages/friends/Friends';
import About from '@/pages/about/About';
import ArticleDetail from '@/pages/articleDetail/ArticleDetail';
import TimeLine from '@/pages/timeLine/TimeLine';
import TagArticleList from '@/pages/tagArticleList/TagArticleList';
import TagList from '@/pages/tagList/TagList';
import ArticleList from '@/pages/articleList/ArticleList';
import Home from '@/pages/home/Home';


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
                component: Home,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'article/list',
                component: ArticleList,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'article/detail',
                component: ArticleDetail,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'timeline',
                component: TimeLine,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'friends',
                component: Friends,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'about',
                component: About,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'tags/article/list',
                component: TagArticleList,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: 'tags',
                component: TagList,
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
];
const router = new Router({
    routes: routers,
    // mode: 'history',
});

router.afterEach(() => {
    window.scrollTo(0,0);
});

export default router;