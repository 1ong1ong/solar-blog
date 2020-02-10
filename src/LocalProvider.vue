<template>
    <a-locale-provider :locale="locale">
        <App />
    </a-locale-provider>
</template>

<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
    import App from './App.vue'
    import moment from 'moment';
    import 'moment/locale/zh-cn';

    moment.locale('zh-cn');
    export default {
        name: 'LocalProvider',
        data() {
            return {
                locale: zhCN,
            }
        },
        components: {
            App
        }
    }
</script>