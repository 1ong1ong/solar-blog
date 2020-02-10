<template>
    <div class="content">
        <my-header/>
        <my-content/>
        <my-footer/>
    </div>
</template>

<script>
    import MyHeader from './header/Header'
    import MyContent from './body/Content'
    import MyFooter from './footer/Footer'

    export default {
        name: "Layout",
        components: {
            MyHeader, MyContent, MyFooter
        },
    }
</script>

<style scoped lang="less">
    .margin-center() {
        background-color: white;
        margin: 0 auto;
    }

    .content {
        .margin-center()
    }


</style>