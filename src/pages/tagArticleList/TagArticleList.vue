<template>
    <div class="tagArticleList">
        <div class="top-breadcrumb">
            <a-breadcrumb separator=">">
                <a-breadcrumb-item class="all-tag">
                    <a-icon type="tags" style="font-size: 16px" @click="routeTagList"/>
                </a-breadcrumb-item>
                <a-breadcrumb-item>{{tagName}}</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <div class="article-list">
            <article-list ref="articleList"/>
        </div>
    </div>
</template>

<script>
    import ArticleList from "../articleList/ArticleList";

    export default {
        name: "TagArticleList",
        components: {
            ArticleList
        },
        data() {
            return {
                tagId: null,
                tagName: ''
            }
        },
        mounted() {
            this.tagId = this.$route.query.tag;
            this.tagName = this.$route.query.name;
        },
        watch: {
            $route() {
                if (this.$route.query.tag) {
                    this.$refs.articleList.reset();
                    this.tagId = this.$route.query.tag;
                    this.tagName = this.$route.query.name;
                }
            },
        },
        methods: {
            routeTagList() {
                this.$router.push('/pages/tags');
            }
        }
    }
</script>

<style lang="less">
    @import url("../../mixin/mixin.less");


    .tagArticleList {
        margin: 0 auto;
        .response-width-no-padding();

        .top-breadcrumb {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 30px;

            .ant-breadcrumb > span > .ant-breadcrumb-link {
                font-size: 16px;
                color: #888888;
            }
            .ant-breadcrumb > .all-tag > .ant-breadcrumb-link {
                cursor: pointer;
                transition: all .3s;
                &:hover {
                    color: #2C5DB2;
                }
            }
        }
    }
</style>