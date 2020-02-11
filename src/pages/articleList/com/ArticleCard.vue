<template>
    <div class="card">
        <div class="content" v-show="show">
            <div class="card-content">
                <div class="left">
                    <div class="title" @click="toArticleDetail(id)">
                        {{title}}
                    </div>
                    <div class="tag">
                        <a-tag class="ant-tag" v-for="(item, index) in tags" :key="index"
                               @click="routeTagArticleList(item.id, item.name)">{{item ? item.name:''}}
                        </a-tag>
                    </div>
                    <div class="time">
                        {{$moment(time).format('YYYY/MM/DD')}}
                    </div>
                </div>
                <div class="right" @click="toArticleDetail">
                    <img :src="img" alt="">
                    <div class="img-wrapper"></div>
                </div>
            </div>
            <div class="app">
                <div class="top" @click="toArticleDetail">
                    <img :src="img" alt="">
                    <div class="img-wrapper"></div>
                </div>
                <div class="bottom">
                    <div class="title" @click="toArticleDetail(id)">
                        {{title}}
                    </div>
                    <div class="tag">
                        <a-tag class="ant-tag" v-for="(item, index) in tags" :key="index"
                               @click="routeTagArticleList(item.id, item.name)">{{item ? item.name:''}}
                        </a-tag>
                    </div>
                    <div class="time">
                        {{$moment(time).format('YYYY/MM/DD')}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "ArticleCard",
        props: {
            title: {
                type: String,
                default: ''
            },
            tags: {
                type: Array,
            },
            show: {
                type: Boolean,
                default: true
            },
            time: {
                type: String,
                default: moment().format('YYYY/MM/DD')
            },
            img: {
                type: String,
                default: require('../../../assets/test1.jpg')
            },
            id: {
                type: Number,
                require: true
            }
        },
        computed: {
            createTime(val) {
                return moment(val).format('YYYY/MM/DD')
            }
        },
        methods: {
            toArticleDetail() {
                this.$router.push({
                    path: '/pages/article/detail',
                    query: {article: this.id}
                })
            },
            routeTagArticleList(tagId, name) {
                this.$router.push({path: '/pages/tags/article/list', query: {tag: tagId, name: name}})
            },
        }
    }
</script>

<style scoped lang="less">
    .card {

        width: 100%;
        padding: 10px;

        .content {
            width: 100%;
            height: 100%;
            padding: 20px;
            border-radius: 5px;
            border: 1px #fbfbfb solid;
            box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
            transition: all .6s;

            &:hover {
                box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
            }

            @media (min-width: 768px) {
                height: 200px;
                .card-content {
                    position: relative;

                    .left {
                        height: 150px;
                        width: calc(~'100% - 160px');

                        position: absolute;
                        left: 0;

                        .title {
                            font-size: 18px;
                            font-weight: 500;
                            /*max-height: 54px;*/
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            position: absolute;
                            top: 0;
                            width: 100%;

                            &:hover {
                                cursor: pointer;
                            }
                        }

                        .tag {
                            position: absolute;
                            top: 70px;
                            max-height: 56px;
                            overflow: hidden;
                            width: 100%;
                            @media (max-width: 576px) {
                                top: 60px;
                            }

                            .ant-tag {
                                border: none;
                                background-color: #e7f1ff;
                                /*height: 28px;*/
                                /*font-size: 14px;*/
                                /*line-height: 28px;*/
                                border-radius: 6px;
                                margin-top: 4px;
                            }
                        }

                        .time {
                            position: absolute;
                            bottom: 10px;
                            font-size: 15px;
                            color: #b4b4b4;

                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }

                    .right {
                        height: 140px;
                        width: 140px;
                        position: absolute;
                        right: 0;
                        overflow: hidden;
                        box-shadow: 0 8px 15px rgba(0, 0, 0, .4);
                        border-radius: 8px;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 8px;
                            box-shadow: 0 8px 15px rgba(0, 0, 0, .4);


                            &:hover {
                                cursor: pointer;
                            }
                        }

                        .img-wrapper {
                            height: 150px;
                            width: 150px;
                            position: absolute;
                            top: 0;
                            background: linear-gradient(100deg, transparent, #fff, transparent);
                            left: -150px;
                            transition: left 1s cubic-bezier(0.8, 0.8, 1.4, 1.4), right 0.5s cubic-bezier(0.8, 0.8, 1.4, 1.4);
                        }

                        &:hover {
                            .img-wrapper {
                                animation: imgWrapperIn 1s ease 0s;
                            }
                        }
                    }
                }

                .app {
                    display: none;
                }
            }
            @media (max-width: 768px) {
                height: 320px;
                .card-content {
                    display: none;
                }

                .app {
                    position: relative;
                    .top {
                        height: 140px;
                        width: 100%;
                        position: absolute;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        img {
                            width: 140px;
                            height: 140px;
                            border-radius: 8px;
                            box-shadow: 0 8px 15px rgba(0, 0, 0, .4);


                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }

                    .bottom {
                        height: calc(~'100% - 160px');
                        width: 100%;

                        position: absolute;
                        top: 170px;

                        .title {
                            text-align: center;
                            font-size: 18px;
                            font-weight: 500;
                            /*max-height: 54px;*/
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            width: 100%;

                            &:hover {
                                cursor: pointer;
                            }
                        }

                        .tag {
                            max-height: 56px;
                            overflow: hidden;
                            width: 100%;
                            text-align: center;
                            margin-top: 20px;
                            .ant-tag {
                                border: none;
                                background-color: #e7f1ff;
                                border-radius: 6px;
                                margin-top: 4px;
                            }
                        }

                        .time {
                            font-size: 15px;
                            color: #b4b4b4;
                            text-align: center;
                            margin-top: 20px;

                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }

    @keyframes imgWrapperIn {
        from {
            left: -150px;
        }
        to {
            left: 450px;
        }
    }
</style>