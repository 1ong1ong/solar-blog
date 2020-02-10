<template>
    <div :class="['btn',{'btn-center' : btnCenter }]">
        <div class="left-btn" @click="toArtList">阅读列表</div>
        <div class="right-btn" @click="toAbout">了解主人</div>
    </div>
</template>

<script>
    export default {
        name: "Btn",
        props: {
            btnCenter: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toArtList() {
                this.$router.push('/pages/article/list')
            },
            toAbout() {
                this.$router.push('/pages/about')
            }
        }
    }
</script>

<style scoped lang="less">

    .btn-common() {
        width: 106px;
        height: 100%;
        text-align: center;
        line-height: 36px;
        border-radius: 18px;
        font-size: 14px;

        &:hover {
            cursor: pointer;
        }
    }
    .btn {
        width: 100%;
        height: 36px;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .left-btn {
            .btn-common();
            background-color: #436BAF;
            color: white;
            margin-right: 10px;
            &:hover {
                background-color: rgba(68, 108, 177, 0.8);
            }
        }
        .right-btn {
            .btn-common();
            border: #787878 1px solid;
            color: #787878;
            margin-left: 10px;
            &:hover {
                border: #436BAF 1px solid;
                color: #436BAF;
            }

        }
    }
    .btn-center {
        justify-content: center;
    }
</style>