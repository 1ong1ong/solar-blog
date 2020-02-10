<template>
    <div class="home" id="home">
        <vue-canvas-nest :el="'#home'" :config="{color:'44,93,178', opacity:0.4, count: 50, zIndex:200}"/>
        <div id="up" class="up">
            <div class="left-title">
                <title-line margin-bottom="10px"/>
                <div class="title">
                    细雨听风
                </div>
                <div class="sub-title">
                    读万卷书，行万里路
                </div>
                <div class="btn">
                    <home-btn/>
                </div>
            </div>
            <div class="right-img">
                <img src="../../assets/home.png" alt="home.png"/>
            </div>
            <div class="app">
                <div class="up-img">
                    <img src="../../assets/home.png" alt="home.png"/>
                </div>
                <title-line margin-bottom="10px"/>
                <div class="title">
                    细雨听风
                </div>
                <div class="sub-title">
                    读万卷书，行万里路
                </div>
                <div class="btn">
                    <home-btn :btn-center="true"/>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="title">
                最近更新
            </div>
            <div class="articles" >
                <my-card v-for="(item, index) in articleList" :key="index" :title="item.title" :img-url="item.coverImgUrl" :id="item.id"/>
            </div>
        </div>
        <div class="down">
            <div class="tags">
                <tag/>
            </div>
        </div>

        <my-spin v-if="spin"/>
    </div>
</template>

<script>
    import HomeBtn from './com/Btn'
    import MyCard from './com/Card'
    import TitleLine from "../../components/titleLine/TitleLine";
    import Tag from '@/components/tag/Tag'
    import vueCanvasNest from 'vue-canvas-nest'
    import {getHomeArticle} from '../../api/article'

    export default {
        name: "Home",
        components: {
            HomeBtn, MyCard, vueCanvasNest, Tag, TitleLine
        },
        data() {
            return {
                spin: false,
                articleList: []
            }
        },
        mounted() {
            this.getHomeArticle();
        },
        methods: {
            getHomeArticle() {
                getHomeArticle().then(res => {
                    this.articleList = res
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");

    .home {
        width: 100%;
        height: auto;

        .up {
            .response-width();
            margin: 0 auto;
            @media (min-width: 768px) {
                height: 570px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .left-title {
                    width: 50%;
                    height: 100%;

                    padding-top: 80px;
                    .title {
                        font-size: 60px;
                        font-weight: bolder;
                        color: #292929;
                    }

                    .sub-title {
                        font-size: 18px;
                        margin-top: 20px;
                        color: #292929;
                    }

                    .btn {
                        margin-top: 20px;
                        width: 80%;
                    }
                }

                .right-img {
                    width: 50%;
                    height: 100%;
                    position: relative;

                    img {
                        width: 82%;
                        height: 83%;
                        position: absolute;
                        right: 0;
                        top: 16px;
                    }
                }

                .app {
                    display: none;
                }
            }
            @media (max-width: 768px) {
                height: 600px;
                .left-title {
                    display: none;
                }

                .right-img {
                    display: none;
                }

                .app {
                    width: 100%;
                    height: 100%;

                    .up-img {
                        height: 260px;
                        width: 240px;
                        margin: 0 auto 40px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .title {
                        width: 320px;
                        text-align: center;
                        font-size: 30px;
                        font-weight: 600;
                        color: #292929;
                        margin: 10px auto 20px;
                    }

                    .sub-title {
                        width: 320px;
                        text-align: center;
                        font-size: 18px;
                        color: #292929;
                        margin: 10px auto 30px;
                    }
                    .btn {
                        width: 80%;
                        margin: 0 auto;
                    }
                }
            }
        }

        .mid {
            width: 100%;
            background-image: linear-gradient(#A2C5FF, #2C5DB2);

            .title {
                font-size: 26px;
                font-weight: 500;
                text-align: center;
                padding-top: 46px;
                color: white;
            }

            @media (min-width: 768px) {
                height: 500px;

                .articles {
                    .response-width();
                    margin: 36px auto 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            @media (max-width: 768px) {
                .articles {
                    margin-top: 68px;
                }
            }
        }

        .down {
            width: 100%;
            background-color: #EFEFEF;

            .tags {
                padding: 30px 20px 40px 20px;
                margin: 0 auto;
                .response-width-no-padding();
            }

        }
    }
</style>