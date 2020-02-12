<template>
    <div class="about">
        <div class="top">
            <div class="avatar">
                <a-avatar :src="require('../../assets/about-avatar.jpg')" :size="110"/>
            </div>
            <h1 class="name">
                AⅡ
            </h1>
            <div class="social">
                <span><a-icon type="github" style="color: #2f4979; fontSize: 15px "/></span>
                <span><a-icon type="qq" style="color: #2f4979; fontSize: 15px "/></span>
            </div>
        </div>
<!--        <div class="divider">-->
<!--            <title-line backgroundColor="#eff2f7" height="4px" margin-bottom="30px"/>-->
<!--        </div>-->
        <div class="content">
            <markdown-it-vue :content="content"/>
        </div>
        <div class="divider">
            <title-line backgroundColor="#eff2f7" height="4px" margin-top="30px" margin-bottom="30px"/>
        </div>
        <div class="img">
<!--            <img src="../../assets/summer-solstice-strawberry-moon.gif" alt="summer-solstice-strawberry-moon.gif">-->
        </div>
        <div class="comment-div">
            <comment :level="1" :article-id="0" @reply="reply"/>
        </div>
        <div class="comment-view">
            <comment-view :article-id="0" ref="commentView"/>
        </div>
    </div>
</template>

<script>
    import TitleLine from "../../components/titleLine/TitleLine";
    import MarkdownItVue from 'markdown-it-vue';
    import Comment from '../../components/comment/Comment';
    import CommentView from '../../components/commentView/CommentView';
    import 'markdown-it-vue/dist/markdown-it-vue.css';

    export default {
        name: "About",
        components: {
            TitleLine, MarkdownItVue, Comment, CommentView
        },
        mounted() {
            this.$refs.commentView.getCommentList();
        },
        data() {
            return {
            }
        },
        computed: {
            content() {
                return this.$store.state.home.config.aboutMdContent;
            }
        },
        methods: {
            reply() {
                this.$refs.commentView.getCommentList();
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");

    .about {
        .response-width();
        margin: 0 auto;
        padding-left: 20px !important;
        padding-right: 20px !important;
        .top {
            width: 100%;
            height: 300px;

            .avatar {
                padding-top: 30px;
                display: flex;
                justify-content: center;
            }

            .name {
                text-align: center;
                margin-top: 10px;
                color: #324e81;
            }

            .social {
                text-align: center;
                margin-top: 20px;

                span {
                    display: inline-block;
                    margin: 0 6px;
                }
            }
        }

        .divider {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .img {
            width: 100%;
            display: flex;
            justify-content: center;
            background-image: url("../../assets/summer-solstice-strawberry-moon.gif");
            background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;
            @media (min-width: 1100px) {
                height: 430px;
            }
            @media (min-width: 768px) and (max-width: 1100px) {
                height: 330px;
            }
            @media (max-width: 768px) {
                height: 200px;
            }
        }

        .comment-div {
            width: 100%;
            margin-top: 40px;
            margin-bottom: 10px;
        }

        .comment-view {
            width: 100%;
            margin-bottom: 80px;
        }
    }
</style>