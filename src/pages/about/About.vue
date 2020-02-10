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
            <img src="../../assets/summer-solstice-strawberry-moon.gif" alt="summer-solstice-strawberry-moon.gif">
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
        data() {
            return {
                content: "## 前言 :black_nib:\n" +
                    "细雨听风，柳绿花香，  \n" +
                    "目所能及，苍茫万丈；\n" +
                    "\n" +
                    "心绪飘飞，万流涛江，  \n" +
                    "吾之所行，步履为常。\n" +
                    "\n" +
                    "## 我是谁 ？:ghost:\n" +
                    "小时候把 “ENGLISH”   \n" +
                    "读为 “应给利息” 的同学当了行长；  :cop:  \n" +
                    "读为 “阴沟里洗” 的成了小菜贩子；  :person_with_blond_hair:  \n" +
                    "读为 “因果联系” 的成为了哲学家； :older_man:   \n" +
                    "读为 “硬改历史” 的成了政治家；  :man:  \n" +
                    "读为 “英国里去” 的成了海外华侨；  :man_with_gua_pi_mao:  \n" +
                    "读为 “应该你死” 的成了野心家；  :man_with_turban:   \n" +
                    "而我不小心读成了 “应该累死” 结果成了软件攻城狮。:scream_cat:\n" +
                    "\n" +
                    "## 为什么写 BLOG ？:computer:\n" +
                    "1、将自己学到的技术与大家分享；  \n" +
                    "2、巩固自己所学的知识；  \n" +
                    "3.、记录生活，记录事件，记录学习。\n" +
                    "\n" +
                    "## 关于本站 :fire:\n" +
                    "本站是一个非盈利性专业个人网站，开设于 2019年，主要分享自己的学习心得和生活感悟，如需转载，请加上原文链接。\n" +
                    "::: error\n" +
                    "### 如有侵权或违法内容，请联系博主及时删除，感谢！\n" +
                    ":::"

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

            img {
                border-radius: 5px;
                /*box-shadow: 0 10px 10px;*/
                max-width: 90%;
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
</style>