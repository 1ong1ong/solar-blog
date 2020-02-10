<template>
    <div class="comment-view">
        <div class="top">
            <div v-if="commentNum>0" class="not-first"><span>10</span>评论</div>
            <div v-if="commentNum===0" class="first">快来做第一个评论的人吧~</div>
        </div>
        <div class="content">
            <!--   父评论    -->
            <a-comment v-for="(item) in commentList" :key="item.id"
                       :author="item.replyNickname" avatar=""
                       :datetime="$moment(item.createTime).format('YYYY-MM-DD')">
                <span slot="actions" @click="reply(item.id, item.replyNickname)">回复</span>
                <markdown-it-vue slot="content" :content="item.content"/>

                <!--   子评论    -->
                <a-comment v-for="(childItem) in item.children" :key="childItem.id"
                           :author="childItem.replyNickname" avatar=""
                           :datetime="$moment(childItem.createTime).format('YYYY-MM-DD')">
                    <span slot="actions" @click="reply(childItem.id, childItem.replyNickname)">回复</span>
                    <markdown-it-vue slot="content" :content="childItem.content"/>
                </a-comment>
            </a-comment>
        </div>

        <a-modal :visible="visible" :closable="false" :footer="null" @cancel="hiddenModal">
            <div class="comment-modal">
                <comment ref="replyComment" :level="2" :article-id="articleId" :pid="pid" @reply="replyComment" :to="toWho"/>
            </div>
        </a-modal>
    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue';
    import 'markdown-it-vue/dist/markdown-it-vue.css'
    import Comment from '../comment/Comment'
    import {getCommentList} from '../../api/comment'

    export default {
        name: "CommentView",
        components: {
            MarkdownItVue, Comment
        },
        data() {
            return {
                commentNum: 1,
                visible: false,
                pid: null,
                commentList: [],
                toWho: ''
            }
        },
        props: {
            articleId: Number
        },
        mounted() {
        },
        watch: {
            articleId() {
                this.getCommentList();
            }
        },
        methods: {
            reply(commentId, author) {
                this.visible = true;

                setTimeout(() => {
                    this.$refs.replyComment.onfocus(author);
                }, 100);

                this.toWho = author;
                this.pid = commentId;
            },
            replyComment() {
                this.hiddenModal();
                this.getCommentList();
            },
            hiddenModal() {
                this.visible = false;
            },
            getCommentList() {
                getCommentList(this.articleId).then(res => {
                    this.commentList = res;
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .comment-view {
        width: 100%;
        padding: 10px;

        .top {
            width: 100%;
            height: 30px;

            .not-first {
                font-size: 16px;
                font-weight: 500;

                span {
                    margin-right: 4px;
                    font-size: 20px;
                    font-weight: 700;
                }
            }

            .first {
                text-align: center;
                font-size: 16px;
                color: #8f8f8f;
            }
        }

        .content {
            margin-top: 20px;
        }
    }
</style>