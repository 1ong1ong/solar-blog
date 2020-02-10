<template>
    <a-menu v-model="currentMenuItem" :mode="mode" style="border: none; font-size: 14px" @select="selectMenuItem">
        <a-sub-menu>
            <span slot="title">
                分类<a-icon v-if="mode==='horizontal'" type="caret-down" style="margin-left: 10px"/>
            </span>
            <!--            <a-menu-item-group title="Item 1">-->
            <!--                <a-menu-item key="setting:1">Option 1</a-menu-item>-->
            <!--                <a-menu-item key="setting:2">Option 2</a-menu-item>-->
            <!--            </a-menu-item-group>-->
            <!--            <a-menu-item-group title="Item 2">-->
            <!--                <a-menu-item key="setting:3">Option 3</a-menu-item>-->
            <!--                <a-menu-item key="setting:4">Option 4</a-menu-item>-->
            <!--            </a-menu-item-group>-->
            <a-menu-item v-for="(item) in categories" :key="item.id" class="drop-menu">
                {{item.name}}
                <a-divider/>
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="timeline">
            时间线
        </a-menu-item>
        <a-menu-item key="friends">
            友人帐
        </a-menu-item>
        <a-menu-item key="about">
            关于我
        </a-menu-item>
    </a-menu>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import {getAllCategories} from '../../../../api/category'

    export default {
        name: "Menu",
        props: {
            mode: {
                type: String,
                default: 'horizontal'
            }
        },
        data() {
            return {
                categories: []
            }
        },
        computed: {
            currentMenuItem: {
                get() {
                    return this.$store.state.home.currentMenuItem
                },
                set(val) {
                    this.$store.dispatch('home/selectMenuItem', val[0])
                }
            },
            ...mapState({}),
            ...mapGetters('home', {})
        },
        mounted() {
            if (this.categories.length === 0) {
                this.getAllCategories();
            }
        },
        methods: {
            selectMenuItem(item) {
                this.$store.dispatch('home/selectMenuItem', item.key);
                if (item.key === 'timeline') {
                    this.$router.push('/pages/timeline')
                } else if (item.key === 'friends') {
                    this.$router.push('/pages/friends')
                } else if (item.key === 'about') {
                    this.$router.push('/pages/about')
                } else {
                    this.$router.push({path: '/pages/article/list', query: {category: item.key}})
                }
            },
            getAllCategories() {
                getAllCategories().then(res => {
                    this.categories = res;
                })
            }
        }
    }
</script>

<style lang="less">
    ul > li {
        font-size: 15px;
    }

    .ant-menu-horizontal.ant-menu-sub, .ant-menu-vertical.ant-menu-sub, .ant-menu-vertical-left.ant-menu-sub, .ant-menu-vertical-right.ant-menu-sub {
        min-width: 100px;

    }
    .drop-menu {
    }
</style>