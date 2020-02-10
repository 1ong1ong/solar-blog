<template>
    <div class="body">
        <transition name="my-trans" mode="out-in">
            <keep-alive v-if="this.$route.meta.keepAlive">
                <router-view />
            </keep-alive>
            <router-view v-if="!this.$route.meta.keepAlive"/>
        </transition>
        <a-back-top class="back-top"/>
    </div>
</template>

<script>

    export default {
        name: "Content",
    }
</script>

<style lang="less">
    .my-trans-enter-active {
        transition: all .2s ease;
    }

    .my-trans-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .my-trans-enter, .my-trans-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    .back-top {
        bottom: 30px;
        right: 20px;

        .ant-back-top-content {
            background-color: #2C5DB2;
            box-shadow: 0 3px 12px #2C5DB2;


        }
    }
</style>