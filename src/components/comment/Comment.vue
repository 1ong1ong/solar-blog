<template>
    <div class="comment" id="comment">
        <div class="top-input">
            <input type="text" placeholder="昵称" v-model="replyNickname"/>
            <input type="text" placeholder="邮箱" v-model="replyEmail"/>
            <input type="text" placeholder="网址(http://)" v-model="replyUrl"/>
        </div>

        <div class="content">
            <a-textarea id="commentInput" ref="commentInput" :placeholder="placeholder" autosize v-model="content"/>

            <div class="preview" @click="onPreview">
                <span>预览</span>
            </div>

            <div class="preview-markdown" v-if="showPreview">
                <markdown-it-vue :content="content"/>
            </div>
            <div class="comment-btn">
                <div class="btn">
                    <a-button type="primary" @click="confirmComment">回复</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue';
    import 'markdown-it-vue/dist/markdown-it-vue.css'
    import {reply} from '../../api/comment'

    export default {
        name: "Comment",
        data() {
            return {
                replyNickname: '',
                replyEmail: '',
                replyUrl: '',
                content: '',
                showPreview: false,
                placeholder: '在这里写下你的留言 | 支持 Markdown 语法',
            }
        },
        props: {
            level: Number,
            articleId: Number,
            pid: Number,
            to: String,
        },
        components: {
            MarkdownItVue
        },
        mounted() {

        },
        methods: {
            confirmComment() {
                if (this.checkCommentData()) {
                    this.reply();
                }
            },
            onPreview() {
                this.showPreview = !this.showPreview
            },
            onfocus(author) {
                this.reset();
                this.placeholder = '@' + author;
                this.$refs.commentInput.focus();
            },
            reset() {
                // this.replyNickname = '';
                this.replyEmail = '';
                this.replyUrl = '';
                this.content = '';
            },
            reply() {
                let data = {
                    replyNickname: this.replyNickname,
                    replyEmail: this.replyEmail,
                    replyUrl: this.replyUrl,
                    content: this.to ? `@${this.to}：  ${this.content}`  : this.content,
                    level: this.level,
                    articleId: this.articleId,
                    pid: this.pid
                };
                reply(data).then(() => {
                    this.$notification.success({
                        message: '评论成功'
                    });
                    this.$emit('reply');
                    this.reset();
                });
            },
            checkCommentData() {
                if (this.content === '') {
                    this.$notification.error({
                        message: '评论内容不能为空'
                    });
                    return false;
                }
                if (this.replyNickname === '') {
                    this.$notification.error({
                        message: '评论昵称不能为空'
                    });
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style lang="less">
    .comment {
        width: 100%;
        padding: 10px;
        border: #ececec solid 1px;
        border-radius: 5px;

        .top-input {
            height: auto;
            width: 100%;

            input {
                height: 50px;
                border: none;
                border-bottom: #d5d5d5 dashed 1px;
                @media (max-width: 480px) {
                    width: 100%;
                }
                width: 33.33%;
                font-size: 10px;
                line-height: 30px;
                padding-left: 8px;

                &:focus {
                    outline: none;
                    border-bottom: crimson 1px dashed;
                }
            }
        }

        .content {
            height: auto;

            textarea {
                outline: none;
                width: 100%;
                min-height: 120px;
                border: none;
                padding-top: 10px;

                &:focus {
                    outline: none;
                    border: none;
                }
            }

            .preview {
                width: 100%;
                height: 30px;
                text-align: right;
                font-size: 12px;
                margin-top: 20px;
                line-height: 30px;

                &:hover {
                    cursor: pointer;
                    color: #3e3e3e;
                }
            }

            .preview-markdown {
                height: auto;
                width: 100%;

                .markdown-body > h1, h2 {
                    border-bottom: none;
                }
            }

            .comment-btn {
                height: 40px;
                width: 100%;
                margin-top: 20px;
                position: relative;

                .btn {
                    position: absolute;
                    right: 0;
                }
            }
        }
    }
</style>