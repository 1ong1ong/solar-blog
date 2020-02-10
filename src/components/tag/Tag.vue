<template>
    <div class="tags">
        <span class="tag" @click="routeTagArticleList(item.id, item.name)" v-for="(item) in tags"
              :key="item.id">{{item.name}}</span>
    </div>

</template>

<script>
    import {getAllTags} from '../../api/tag'

    export default {
        name: "tag",
        data() {
            return {
                tags: []
            }
        },
        mounted() {
            this.getAllTags();
        },
        methods: {
            routeTagArticleList(tagId, name) {
                this.$router.push({path: '/pages/tags/article/list', query: {tag: tagId, name: name}})
            },
            getAllTags() {
                getAllTags().then(res => {
                    this.tags = res
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .tags {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .tag {
            font-size: 12px;
            color: #8f8f8f;
            height: 36px;
            display: inline-block;
            line-height: 36px;
            padding: 0 15px 0 15px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 14px 14px #cecece;
            margin: 10px 6px 10px 6px;
            transition: all .3s;

            &:hover {
                cursor: pointer;
                box-shadow: 0 4px 4px #ababab;
                color: #717171;
                animation: tagHover 0.3s ease 0s 1;
                transform: translateY(10px);
                background-color: #fafafa;
            }
        }
    }

    @keyframes tagHover {
        0% {
            box-shadow: 0 14px 14px #cecece;
            transform: translateY(0px);
        }
        100% {
            box-shadow: 0 4px 4px #ababab;
            transform: translateY(10px);
        }
    }
</style>