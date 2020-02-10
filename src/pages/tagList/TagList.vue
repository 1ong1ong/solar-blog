<template>
    <div class="tag-list" ref="tagList" :style="{'min-height': clientHeight+'px'}">
        <div class="list">
            <tag/>
        </div>
    </div>
</template>

<script>
    import Tag from "../../components/tag/Tag";

    export default {
        name: "TagList",
        components: {
            Tag
        },
        data() {
            return {
                clientHeight: null
            }
        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");


    .tag-list {
        margin: 0 auto;
        .response-width();

        .list {
            padding: 10px 20px 20px 20px;
        }
    }
</style>