<template>
    <div class="comment-view">
        <div class="top">
            <div v-if="commentNum>0" class="not-first"><span>{{commentNum}}</span>评论</div>
            <div v-if="commentNum===0" class="first">快来做第一个评论的人吧~</div>
        </div>
        <div class="content">
            <!--   父评论    -->
            <a-comment v-for="(item) in commentList" :key="item.id"
                       :author="item.replyNickname" :avatar="commentImg[strHashCode(item.replyNickname)%23]"
                       :datetime="$moment(item.createTime).format('YYYY-MM-DD')">
                <span slot="actions" @click="reply(item.id, item.replyNickname)">回复</span>
                <markdown-it-vue slot="content" :content="item.content"/>

                <!--   子评论    -->
                <a-comment v-for="(childItem) in item.children" :key="childItem.id"
                           :author="childItem.replyNickname" :avatar="commentImg[strHashCode(childItem.replyNickname)%23]"
                           :datetime="$moment(childItem.createTime).format('YYYY-MM-DD')">
                    <span slot="actions" @click="reply(childItem.id, childItem.replyNickname)">回复</span>
                    <markdown-it-vue slot="content" :content="childItem.content"/>
                </a-comment>
            </a-comment>
        </div>

        <a-modal :visible="visible" :closable="false" :footer="null" @cancel="hiddenModal">
            <div class="comment-modal">
                <comment ref="replyComment" :level="2" :article-id="articleId" :pid="pid" @reply="replyComment"
                         :to="toWho"/>
            </div>
        </a-modal>
    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue';
    import 'markdown-it-vue/dist/markdown-it-vue.css'
    import Comment from '../comment/Comment'
    import {getCommentList} from '../../api/comment'

    const commentImg = [
        require('../../assets/commentAvatar/1.jpeg'),
        require('../../assets/commentAvatar/2.jpeg'),
        require('../../assets/commentAvatar/3.jpg'),
        require('../../assets/commentAvatar/4.jpeg'),
        require('../../assets/commentAvatar/5.jpeg'),
        require('../../assets/commentAvatar/6.jpg'),
        require('../../assets/commentAvatar/7.jpeg'),
        require('../../assets/commentAvatar/8.jpg'),
        require('../../assets/commentAvatar/9.jpeg'),
        require('../../assets/commentAvatar/10.jpeg'),
        require('../../assets/commentAvatar/11.jpg'),
        require('../../assets/commentAvatar/12.jpeg'),
        require('../../assets/commentAvatar/13.jpeg'),
        require('../../assets/commentAvatar/14.jpeg'),
        require('../../assets/commentAvatar/15.jpg'),
        require('../../assets/commentAvatar/16.jpg'),
        require('../../assets/commentAvatar/17.jpeg'),
        require('../../assets/commentAvatar/18.jpeg'),
        require('../../assets/commentAvatar/19.jpeg'),
        require('../../assets/commentAvatar/20.jpeg'),
        require('../../assets/commentAvatar/21.jpg'),
        require('../../assets/commentAvatar/22.jpeg'),
        require('../../assets/commentAvatar/23.jpeg'),
    ];
    export default {
        name: "CommentView",
        components: {
            MarkdownItVue, Comment
        },
        data() {
            return {
                commentNum: 0,
                visible: false,
                pid: null,
                commentList: [],
                toWho: '',
                commentImg
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
            strHashCode(str) {
                str = str.toLowerCase();
                let hash = 11231252, i, ch;
                for (i = str.length - 1; i >= 0; i--) {
                    ch = str.charCodeAt(i);
                    hash ^= ((hash << 5) + ch + (hash >> 2));
                }
                return hash & 0x7FFFFFFF;
            },
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
                    this.commentNum = res.length;
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .comment-view {
        width: 100%;
        padding: 10px;
        margin-top: 10px;

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