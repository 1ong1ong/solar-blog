<template>
    <div class="header">
        <div class="header-bar">
            <div class="header-avatar" @click="routeHome">
                <div class="avatar">
                    <a-avatar :src="avatarSrc" size="large"/>
                </div>
                <div class="title">
                    AⅡ
                </div>
            </div>

            <div class="search">
                <a-divider type="vertical" style="height: 22px"/>
                <a-icon class="search-icon" slot="prefix" type="search" style="font-size: 14px"/>
                <a-select
                        labelInValue
                        placeholder="搜索"
                        class="search-input"
                        style="width: 100%"
                        :value="searchContent"
                        :filterOption="filterOption"
                        allowClear
                        showSearch
                        :showArrow="false"
                        @change="onSearchChange"
                >
                    <!--                    <a-spin v-if="fetching" slot="notFoundContent" size="small"/>-->
                    <!--                    <a-select-option v-for="d in data" :key="d.value">{{d.text}}</a-select-option>-->
                    <a-select-option value="test1">asdfasdf</a-select-option>
                    <a-select-option value="test2">pokjhgvc</a-select-option>
                    <a-select-option value="test3">ikjhgg</a-select-option>
                    <a-select-option value="test4">ygvccde</a-select-option>
                </a-select>
            </div>

            <div class="menu">
                <my-menu ref="menu"/>
            </div>
            <div class="dropdown-menu">
                <a-dropdown>
                    <a-button icon="align-left" style="border: none" size="large"/>
                    <my-menu slot="overlay" mode="inline" style="width: 90px"/>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import MyMenu from './com/Menu'

    export default {
        name: "Header",
        components: {
            MyMenu
        },
        data() {
            return {
                avatarSrc: require('../../../assets/avatar.png'),
                searchContent: undefined
            }
        },
        methods: {
            routeHome() {
                if (this.$route.fullPath !== '/pages/home') {
                    this.$store.dispatch('home/resetMenuItem');
                    this.$router.push('/pages/home')
                }
            },
            onSearchChange(value) {
                this.searchContent = value;
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        }
    }
</script>

<style lang="less">
    @import url("../../../mixin/mixin.less");

    @keyframes titleFont {
        0% {
            color: rgba(67, 107, 175);
        }
        20% {
            color: rgb(22, 62, 85);
        }
        40% {
            color: rgba(54, 172, 175);
        }
        60% {
            color: rgb(31, 82, 85);
        }
        80% {
            color: rgb(135, 69, 175);
        }
        100% {
            color: rgb(63, 34, 85);
        }
    }

    .common-font() {
        color: #c5c5c5;
        font-size: 15px;
    }

    .margin-center() {
        background-color: white;
        margin: 0 auto;
    }

    .header {
        height: 74px;
        .response-width();

        .margin-center();

        .header-bar {
            height: 42px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;

            .header-avatar {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: pointer;
                @media (max-width: 768px) {
                    text-align: center;
                    .margin-center();
                }

                .title {
                    margin-left: 10px;
                    font-size: 20px;
                    font-weight: bolder;
                    font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;
                    -webkit-animation: titleFont 6s ease-in-out 0s infinite;
                    animation: titleFont 6s ease-in-out 0s infinite;
                }
            }

            .search {
                margin-left: 84px;
                width: 240px;
                @media (min-width: 768px) and (max-width: 1100px) {
                    margin-left: 44px;
                    width: 180px;
                }
                display: flex;
                justify-content: flex-start;
                align-items: center;
                @media (max-width: 768px) {
                    display: none;
                }

                .search-icon {
                    margin-left: 10px;
                    .common-font()
                }

                .search-input {
                    margin-left: 14px;
                    border: none;
                    font-size: 15px;
                    outline: 0;

                    .ant-select-selection {
                        border: none;

                    }
                    &::-webkit-input-placeholder {
                        .common-font()
                    }

                    &:focus {
                        outline: 0;
                    }

                }
            }

            .menu {
                @media (max-width: 768px) {
                    display: none;
                }
                position: absolute;
                right: 10px;
            }

            .dropdown-menu {
                @media (min-width: 768px) {
                    display: none;
                }
                position: absolute;
                left: 0;
            }
        }
    }
</style>