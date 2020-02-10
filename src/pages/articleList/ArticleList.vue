<template>
    <div class="list" ref="articleList" :style="{'min-height': clientHeight+'px'}">
        <div class="list-item1" v-for="(item, index) in chunkTwoList" :key="'item1'+index">
            <article-card :show="item[0] !== undefined" :title="item[0] ? item[0].title : ''" :img="item[0] ? item[0].coverImgUrl : ''"
                          :tags="item[0] ? item[0].tags: []" :time="item[0] ? item[0].createTime : ''" :id="item[0] ? item[0].id : 0"/>
            <article-card :show="item[1] !== undefined" :title="item[1] ? item[1].title : ''" :img="item[1] ? item[1].coverImgUrl : ''"
                          :tags="item[1] ? item[1].tags: []" :time="item[1] ? item[1].createTime : ''" :id="item[1] ? item[1].id : 0"/>
        </div>
        <div class="list-item2" v-for="(item, index) in chunkTwoList" :key="'item2'+index">
            <article-card :show="item[0] !== undefined" :title="item[0] ? item[0].title : ''" :img="item[0] ? item[0].coverImgUrl : ''"
                          :tags="item[0] ? item[0].tags: []" :time="item[0] ? item[0].createTime : ''" :id="item[0] ? item[0].id : 0"/>
            <article-card :show="item[1] !== undefined" :title="item[1] ? item[1].title : ''" :img="item[1] ? item[1].coverImgUrl : ''"
                          :tags="item[1] ? item[1].tags: []" :time="item[1] ? item[1].createTime : ''" :id="item[1] ? item[1].id : 0"/>
        </div>
        <div class="list-item3" v-for="(item, index) in articleList" :key="'item3'+index">
            <article-card :show="item !== undefined" :title="item ? item.title : ''" :tags="item ? item.tags : []"
                          :time="item ? item.createTime : ''" :img="item ? item.coverImgUrl : ''" :id="item ? item.id : 0"/>
        </div>
        <div class="pagination-bottom">
            <a-pagination size="small" :total="total" :pageSize="pageSize" :current="current" @change="onPageChange" @showSizeChange="onPageSizeChange"
                          :pageSizeOptions="pageSizeOption" :showSizeChanger="showSizeChanger"
                          :showQuickJumper="showQuickJumper" :showTotal="totalSize => `总共 ${totalSize} 条文章`"/>
        </div>
        <my-spin v-if="spin"/>
    </div>
</template>

<script>
    import ArticleCard from "./com/ArticleCard";
    import {getArticlePage} from '../../api/article';
    import _ from 'lodash';

    export default {
        name: "ArticleList",
        components: {
            ArticleCard
        },
        data() {
            return {
                articleList: [],
                total: undefined,
                pageSizeOption: ['12','24','48','96'],
                pageSize: 12,
                current: 1,
                showSizeChanger: true,
                showQuickJumper: true,
                screenWidth: 1200,
                spin: false,
                categoryId: null,
                tagId: null,
                clientHeight: null
            }
        },
        computed: {
            chunkThreeList() {
                return _.chunk(this.articleList, 3)
            },
            chunkTwoList() {
                return _.chunk(this.articleList, 2)
            },
        },
        mounted() {
            this.categoryId = this.$route.query.category;
            this.tagId = this.$route.query.tag;
            this.clientHeight = document.documentElement.clientHeight;
            this.screenWidth = document.documentElement.clientWidth;
            window.addEventListener("resize", () => {
                this.screenWidth = document.documentElement.clientWidth;
            });
        },
        watch: {
            screenWidth(val) {
                if (val < 580) {
                    this.showSizeChanger = false;
                    this.showQuickJumper = false;
                } else {
                    this.showSizeChanger = true;
                    this.showQuickJumper = true;
                }
            },
            $route() {
                if (this.$route.query.category) {
                    this.categoryId = this.$route.query.category;
                }
                if (!this.$route.query.category) {
                    this.categoryId = null;
                }
                if (this.$route.query.tag) {
                    this.tagId = this.$route.query.tag;
                }
                if (!this.$route.query.tag) {
                    this.tagId = null;
                }
            },
            categoryId() {
                this.getArticlePage();
            },
            tagId() {
                this.getArticlePage();
            }
        },
        methods: {
            reset() {
               this.articleList = [];
            },
            onPageSizeChange(current, size) {
                this.current = current;
                this.pageSize = size;
                this.getArticlePage();
            },
            onPageChange(current) {
                this.current = current;
                this.getArticlePage();
            },
            getArticlePage() {
                this.spin = true;
                let params = {
                    categoryId: this.categoryId,
                    tagId: this.tagId,
                    pageNum: this.current,
                    pageSize: this.pageSize
                };
                getArticlePage(params).then(res => {
                    this.spin = false;
                    this.articleList = res.records;
                    this.total = res.total;
                    this.pageSize = res.size;
                    this.current = res.current;
                    window.scrollTo(0,0);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");

    .list {
        margin: 0 auto;
        .response-width();
        @media (min-width: 1100px) {
            .list-item1 {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .list-item2 {
                display: none;
            }

            .list-item3 {
                display: none;
            }
        }
        @media (min-width: 768px) and (max-width: 1100px) {
            .list-item1 {
                display: none;
            }

            .list-item2 {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .list-item3 {
                display: none;
            }
        }
        @media (max-width: 768px) {
            .list-item1 {
                display: none;
            }

            .list-item2 {
                display: none;
            }

            .list-item3 {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .pagination-bottom {
            margin-top: 30px;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
        }
    }
</style>