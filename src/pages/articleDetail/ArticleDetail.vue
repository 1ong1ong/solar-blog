<template>
    <div class="article-detail">
        <markdown :article-info="articleInfo"/>
    </div>
</template>

<script>
    import Markdown from "../../components/mdArtDetail/MdArtDetail";
    import {getArticleDetail} from '../../api/article';

    export default {
        name: "ArticleDetail",
        components: {
            Markdown
        },
        data() {
            return {
                articleId: undefined,
                articleInfo: undefined,
                spin: false
            }
        },
        mounted() {
            this.articleId = this.$route.query.article;
        },
        watch: {
            $route() {
                if (this.$route.query.article) {
                    this.articleId = this.$route.query.article;
                }
            },
            articleId() {
                this.getArticleDetail();
            }
        },
        methods: {
            getArticleDetail() {
                this.articleInfo = undefined;
                getArticleDetail(this.articleId).then(res => {
                    this.articleInfo = res;
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");
    .article-detail {
        .response-width();
        margin: 0 auto;
    }
</style>