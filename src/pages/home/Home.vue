<template>
    <div class="home" id="home">
        <vue-canvas-nest :el="'#home'" :config="{color:'44,93,178', opacity:0.4, count: 20, zIndex:200}"/>
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
            <div class="app" :style="{'height': clientHeight-100 + 'px'}">
                <div class="up-img">
                    <div class="img">
                    </div>
                </div>
                <div class="divider">
                    <title-line/>
                </div>
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
            <div class="articles">
                <my-card v-for="(item, index) in articleList" :key="index" :title="item.title"
                         :img-url="item.coverImgUrl" :id="item.id"/>
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
                articleList: [],
                clientHeight: null
            }
        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight;

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
                        font-size: 50px;
                        font-weight: bolder;
                        color: #292929;
                    }

                    .sub-title {
                        font-size: 18px;
                        margin-top: 30px;
                        color: #292929;
                    }

                    .btn {
                        margin-top: 26px;
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
                min-height: 200px;
                position: relative;
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
                        height: 40%;
                        width: 100%;
                        position: absolute;
                        top: 10%;
                        display: flex;
                        justify-content: center;

                        .img {
                            height: 100%;
                            width: 240px;
                            background-image: url("../../assets/home.png");
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                        }
                    }

                    .divider{
                        position: absolute;
                        top: 50%;
                        width: 100%;
                    }
                    .title {
                        position: absolute;
                        top: 50%;
                        width: 100%;
                        text-align: center;
                        font-size: 30px;
                        font-weight: 600;
                        color: #292929;
                        margin: 10% auto 5%;
                    }

                    .sub-title {
                        position: absolute;
                        top: 60%;
                        width: 100%;
                        text-align: center;
                        font-size: 18px;
                        color: #292929;
                        margin: 10% auto 20%;
                    }

                    .btn {
                        position: absolute;
                        top: 75%;
                        width: 100%;
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