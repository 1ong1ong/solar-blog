<template>
    <div class="card" @click="toArticleDetail">
        <div class="art-img">
            <img :src="imgUrl" alt="">
        </div>
        <div class="art-text">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            title: String,
            imgUrl: String,
            id: Number
        },
        methods: {
            toArticleDetail () {
                this.$router.push({
                    path: '/pages/article/detail',
                    query: {article: this.id}
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .card {
        width: 300px;
        height: 300px;
        margin: 0 auto;

        &:hover {
            cursor: pointer;
        }
        .art-img {
            margin: 0 auto;
            width: 200px;
            height: 200px;
            box-shadow: 0 10px 20px #273247;

            img {
                width: 100%;
                height: 100%;
                border-radius: 6px;

            }
        }

        .art-text {
            margin-top: 30px;
            color: white;
            font-size: 18px;
            text-align: center;
        }
    }
</style>