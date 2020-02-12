<template>
    <div class="friends" ref="friendsPage">
        <div class="top-img">
            <img src="../../assets/first-day-of-spring-2016-northern-hemisphere.gif" alt="friends">
        </div>
        <div class="mid-links">
            <title-balloon title="社区"/>
            <div class="link-cards">
                <a-row v-show="screenWidth >= 768" v-for="(item, index) in chunkThreeList(socialLinks)" :key="'link1'+index">
                    <a-col class="gutter-row" :span="8" v-if="item[0] !== undefined">
                        <friend-card :title="item[0] ? item[0].name : ''" :backgroundImg="item[0] ? item[0].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[0] ? item[0].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                    <a-col class="gutter-row" :span="8" v-if="item[1] !== undefined" >
                        <friend-card :title="item[1] ? item[1].name : ''" :backgroundImg="item[1] ? item[1].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[1] ? item[1].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                    <a-col class="gutter-row" :span="8" v-if="item[2] !== undefined">
                        <friend-card :title="item[2] ? item[2].name : ''" :backgroundImg="item[2] ? item[2].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[2] ? item[2].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                </a-row>
                <a-row v-show="screenWidth < 768 && screenWidth > 634" v-for="(item, index) in chunkTwoList(socialLinks)"
                       :key="'link2'+index">
                    <a-col class="gutter-row" :span="12" v-if="item[0] !== undefined">
                        <friend-card :title="item[0] ? item[0].name : ''" :backgroundImg="item[0] ? item[0].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[0] ? item[0].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                    <a-col class="gutter-row" :span="12" v-if="item[1] !== undefined" >
                        <friend-card :title="item[1] ? item[1].name : ''" :backgroundImg="item[1] ? item[1].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[1] ? item[1].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                </a-row>
                <a-row v-show="screenWidth < 634" v-for="(item, index) in socialLinks" :key="'link3'+index">
                    <a-col class="gutter-row" :span="24">
                        <friend-card :title="item ? item.name : ''" :backgroundImg="item ? item.logo : ''"
                                     :subtitle="item ? item.des: ''" :borderColor="item ? item.color : ''" :link="item ? item.link: '#'"/>
                    </a-col>
                </a-row>
            </div>
            <title-balloon title="博客"/>
            <div class="link-cards">
                <a-row v-show="screenWidth >= 768" v-for="(item, index) in chunkThreeList(friendsLinks)" :key="'link1'+index">
                    <a-col class="gutter-row" :span="8" v-if="item[0] !== undefined">
                        <friend-card :title="item[0] ? item[0].name : ''" :backgroundImg="item[0] ? item[0].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[0] ? item[0].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                    <a-col class="gutter-row" :span="8" v-if="item[1] !== undefined" >
                        <friend-card :title="item[1] ? item[1].name : ''" :backgroundImg="item[1] ? item[1].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[1] ? item[1].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                    <a-col class="gutter-row" :span="8" v-if="item[2] !== undefined">
                        <friend-card :title="item[2] ? item[2].name : ''" :backgroundImg="item[2] ? item[2].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[2] ? item[2].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                </a-row>
                <a-row v-show="screenWidth < 768 && screenWidth > 634" v-for="(item, index) in chunkTwoList(friendsLinks)"
                       :key="'link2'+index">
                    <a-col class="gutter-row" :span="12" v-if="item[0] !== undefined">
                        <friend-card :title="item[0] ? item[0].name : ''" :backgroundImg="item[0] ? item[0].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[0] ? item[0].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                    <a-col class="gutter-row" :span="12" v-if="item[1] !== undefined" >
                        <friend-card :title="item[1] ? item[1].name : ''" :backgroundImg="item[1] ? item[1].logo : ''"
                                     :subtitle="item[0] ? item[0].des: ''" :borderColor="item[1] ? item[1].color : ''" :link="item[0] ? item[0].link: '#'"/>
                    </a-col>
                </a-row>
                <a-row v-show="screenWidth < 634" v-for="(item, index) in friendsLinks" :key="'link3'+index">
                    <a-col class="gutter-row" :span="24">
                        <friend-card :title="item ? item.name : ''" :backgroundImg="item ? item.logo : ''"
                                     :subtitle="item ? item.des: ''" :borderColor="item ? item.color : ''" :link="item ? item.link: '#'"/>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="content">
            <markdown-it-vue :content="content"/>
        </div>
        <div class="divider">
            <title-line backgroundColor="#eff2f7" height="4px" margin-top="30px" margin-bottom="30px"/>
        </div>
        <div class="bottom-comment">
            <div class="comment-div">
                <comment :level="1" :article-id="-1" @reply="reply"/>
            </div>
            <div class="comment-view">
                <comment-view :article-id="-1" ref="commentView"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TitleBalloon from '../../components/titleBalloon/TitleBalloon';
    import FriendCard from '../../components/friendCard/FriendCard';
    import Comment from '../../components/comment/Comment';
    import CommentView from '../../components/commentView/CommentView';
    import MarkdownItVue from 'markdown-it-vue';
    import TitleLine from "../../components/titleLine/TitleLine";
    import {getByType} from '../../api/link';
    import _ from "lodash";

    export default {
        name: "Friends",
        data() {
            return {
                screenWidth: 1200,
                socialLinks: [],
                friendsLinks: [],
            }
        },
        components: {
            TitleBalloon, FriendCard, MarkdownItVue, TitleLine, Comment, CommentView
        },
        computed: {
            content() {
                return this.$store.state.home.config.friendMdContent;
            }
        },
        mounted() {
            this.screenWidth = document.documentElement.clientWidth;
                    window.addEventListener("resize", () => {
                this.screenWidth = document.documentElement.clientWidth;
            });

            this.getLinks();

            this.$refs.commentView.getCommentList();
        },
        methods: {
            chunkThreeList(links) {
                return _.chunk(links, 3)
            },
            chunkTwoList(links) {
                return _.chunk(links, 2)
            },
            getLinks() {
                getByType(0).then(res => {
                    this.socialLinks = res
                });
                getByType(1).then(res => {
                    this.friendsLinks = res
                })
            },
            reply() {
                this.$refs.commentView.getCommentList();
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");

    .friends {
        .response-width();
        margin: 0 auto;
        /*padding-right: 10px !important;*/
        /*padding-left: 10px !important;*/

        .top-img {
            width: 100%;
            height: auto;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .mid-links {
            margin-top: 30px;

            .link-cards {
                margin-bottom: 60px;
            }
        }

        .divider {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .bottom-comment {
            margin-bottom: 80px;
        }
    }
</style>