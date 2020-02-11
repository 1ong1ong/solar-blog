<template>
    <div class="markdown" ref="markdownContent">
        <my-spin v-show="!articleInfo"/>

        <div class="left">
            <div class="img" v-show="articleInfo">
                <img :src="articleInfo ? articleInfo.coverImgUrl : ''" alt="图片"/>
                <div class="tag" @click="routeCategory(articleInfo ? articleInfo.category.id : 0)">
                    <span>{{articleInfo ? articleInfo.category.name : ''}}</span></div>
                <div class="title">{{articleInfo ? articleInfo.title : ''}}</div>
            </div>
            <div class="content">
                <markdown-it-vue :content="articleInfo ? articleInfo.mdContent : ''"/>
            </div>
            <div class="article-detail-footer">
                <div class="zan">
                    <a-popover trigger="click">
                        <template slot="content">
                            <div class="zan-img">
                                <img src="../../assets/pay/pay-wechat.jpg" alt="">
                                <img src="../../assets/pay/pay-ali.jpg" alt="">
                            </div>
                        </template>
                        <a-button ghost shape="circle" class="zan-btn">赏</a-button>
                    </a-popover>
                </div>

                <a-divider/>
                <div class="footer">
                    <div class="copyright">
                        <a-tooltip placement="topLeft">
                            <div slot="title">
                                <span>允许转载，需保留原文链接，著作权归本人所有</span>
                            </div>
                            <a-icon type="copyright"/>
                            <span>转载说明</span>
                        </a-tooltip>
                    </div>
                    <div class="date">
                        <a-tooltip placement="topRight">
                            <div slot="title">
                                <div>发布于：</div>
                                <div>{{ articleInfo ? $moment(articleInfo.createTime).format('YYYY-MM-DD') : ''}}</div>
                                <div>更新于：</div>
                                <div>{{ articleInfo ? $moment(articleInfo.modifyTime).format('YYYY-MM-DD') : ''}}</div>
                            </div>
                            <a-icon type="calendar"/>
                            <span>{{ articleInfo ? $moment(articleInfo.createTime).format('YYYY-MM-DD') : ''}}</span>
                        </a-tooltip>
                    </div>
                </div>
                <div class="tags">
                    <tag/>
                </div>

            </div>
            <div class="comment-div">
                <comment :level="1" :article-id="articleInfo ? articleInfo.id : null" @reply="reply"/>
            </div>
            <div class="comment-view">
                <comment-view :article-id="articleInfo ? articleInfo.id : null" ref="commentView"/>
            </div>
        </div>
        <div class="right" v-if="showAnchor">
            <div class="tip">
                <a-icon type="clock-circle"/>
                <a-tooltip>
                    <template slot="title">
                        <span>文章字数： {{articleInfo ? articleInfo.wordCount : 0}}</span>
                    </template>
                    <span>预计 {{articleInfo ? Math.ceil(articleInfo.wordCount/400) : 0}} 分钟</span>
                </a-tooltip>
            </div>

            <a-anchor :affix="true" v-if="h2Html.length > 0">
                <a-anchor-link v-for="(item, index) in h2Html" :key="'h2'+index" :href="'#'+item.htmlId"
                               :title="item.htmlText">
                </a-anchor-link>
            </a-anchor>
        </div>
    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue';
    import Tag from '../tag/Tag';
    import Comment from '../comment/Comment';
    import CommentView from '../commentView/CommentView';
    import 'markdown-it-vue/dist/markdown-it-vue.css'
    import {getMarkdownTitleIds} from './mdArtDetailUtil'

    export default {
        name: "Markdown",
        props: {
            articleInfo: Object
        },
        data() {
            return {
                h2Html: [],
                screenWidth: 1200,
                showAnchor: true,
            }
        },
        components: {
            MarkdownItVue, Tag, Comment, CommentView
        },
        mounted() {
            this.getAnchorInfo();
            this.screenWidth = document.documentElement.clientWidth;
            window.addEventListener("resize", () => {
                this.screenWidth = document.documentElement.clientWidth;
            });
            this.showAnchor = this.screenWidth >= 768;
        },
        watch: {
            screenWidth(val) {
                this.showAnchor = val >= 768;
            },
            articleInfo() {
                this.h2Html = [];
                setTimeout(() => {
                    this.getAnchorInfo();
                }, 500);
            },
        },
        methods: {
            getAnchorInfo() {
                let h2Html = document.getElementsByTagName('h2');
                this.h2Html = getMarkdownTitleIds(h2Html);
            },
            routeCategory(categoryId) {
                this.$store.dispatch('home/selectMenuItem', categoryId);
                this.$router.push({path: '/pages/article/list', query: {category: categoryId}})
            },
            reply() {
                this.$refs.commentView.getCommentList();
            }
        }
    }
</script>

<style scoped lang="less">
    .img-common() {
        width: 100%;
        object-fit: cover;
        filter: brightness(60%);
        border-radius: 10px;
        box-shadow: 0 10px 10px #ffffff;
    }

    .tag-common() {
        position: absolute;
        color: #cecece;
        width: 80%;
        font-size: 16px;

        span {
            border-bottom: #949494 solid 1px;
            display: inline-block;
            height: 30px;
        }
    }

    .title-common() {
        position: absolute;
        text-align: left;
        color: #ffffff;
        width: 80%;
        font-size: 24px;
    }

    .markdown {
        width: 100%;
        display: flex;
        justify-content: center;

        .left {
            @media (min-width: 1100px) {
                width: 80%;
                .img {
                    position: relative;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 330px;
                        .img-common();
                    }

                    .tag {
                        .tag-common();
                        text-align: left;
                        top: 90px;
                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .title {
                        .title-common();
                        text-align: left;
                        top: 150px;
                    }
                }

            }
            @media (min-width: 768px) and (max-width: 1100px) {
                width: 80%;
                .img {
                    position: relative;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 300px;
                        .img-common();
                    }

                    .tag {
                        .tag-common();
                        text-align: left;
                        top: 90px;
                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .title {
                        .title-common();
                        text-align: left;

                        top: 150px;
                    }
                }

            }
            @media (max-width: 768px) {
                width: 100%;
                .img {
                    position: relative;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 280px;
                        .img-common();
                    }

                    .tag {
                        .tag-common();
                        text-align: center;
                        top: 90px;
                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .title {
                        .title-common();
                        text-align: center;

                        top: 150px;
                    }
                }

            }
            padding: 10px;

            .content {
                width: 100%;
                margin-top: 40px;
            }

            .article-detail-footer {
                width: 100%;
                margin-top: 40px;
                margin-bottom: 40px;

                .zan {
                    width: 40px;
                    height: 40px;
                    margin: 0 auto;

                    .zan-btn {
                        width: 100%;
                        height: 100%;
                        padding: 0;
                        font-size: 20px;
                        font-weight: 600;
                        color: #757575;
                        border: none;
                        box-shadow: 0 10px 10px #cecece;

                        &:hover {
                            cursor: pointer;
                            color: #2C5DB2;
                            border: none;
                        }
                    }
                }


                .footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #9f9f9f;
                    margin-top: -10px;

                    .copyright {
                        width: 50%;

                        span {
                            margin-left: 10px;
                        }

                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .date {
                        width: 50%;
                        text-align: right;

                        span {
                            margin-left: 10px;
                        }

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                .tags {
                    margin-top: 20px;
                }
            }

            .comment-div {
                width: 100%;
                margin-top: 40px;
                margin-bottom: 10px;
            }

            .comment-view {
                width: 100%;
                margin-top: 10px;
                margin-bottom: 80px;
            }
        }

        .right {
            .tip {
                color: #8a939e;
                margin-bottom: 10px;
                margin-left: -6px;

                span {
                    margin-left: 10px;
                }
            }

            @media (min-width: 768px) {
                width: 20%;
                padding: 10px;
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    .zan-img {
        @media (min-width: 1100px) {
            width: 600px;
            img {
                padding: 2px;
                width: 300px;
                height: 300px;
            }
        }
        @media (min-width: 768px) {
            width: 400px;
            img {
                padding: 2px;
                width: 200px;
                height: 200px;
            }
        }
        @media (max-width: 768px) {
            width: 200px;
            img {
                padding: 2px;
                width: 200px;
                height: 200px;
            }
        }
    }
</style>