import Vue from 'vue'
import {
    Avatar,
    Divider,
    Icon,
    Input,
    LocaleProvider,
    Menu,
    Dropdown,
    Button,
    Tag,
    Pagination,
    Anchor,
    Tooltip,
    Popover,
    Spin,
    Comment,
    Timeline,
    Col,
    Row,
    Select,
    BackTop,
    Breadcrumb,
    Notification,
    Modal
} from 'ant-design-vue'

import MySpin from './spin/index'

Vue.prototype.$notification = Notification;
Vue.use(Avatar).use(Divider).use(Icon).use(Input).use(LocaleProvider).use(Menu).use(Dropdown).use(Button).use(Tag)
    .use(Pagination).use(Anchor).use(Tooltip).use(Popover).use(Spin).use(Comment).use(Timeline).use(Row).use(Col)
    .use(Select).use(BackTop).use(Breadcrumb).use(Modal).use(MySpin);